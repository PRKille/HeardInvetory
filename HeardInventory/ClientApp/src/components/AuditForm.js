import React, { useEffect, useState } from 'react';

function AuditForm() {

  const [ auditState, setAuditState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);
  
  useEffect(() => {
      fetch(`http://localhost:5000/api/audits`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setAuditState(jsonifiedResponse);
        setLoadState(true);
      })
      .catch((error) => {
        console.log('Audit Error: ', error);
      });
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let inventoryUpdate = []
    for (let i = 0; i < auditState.length; i++) {
      const { CurrentInventory, ItemName, ItemId, PurchasePrice, StartingInventory, ItemPurchases} = e.target;
      inventoryUpdate.push({ AuditId: CurrentInventory[i].id, ItemName: ItemName[i].value, ItemId: ItemId[i].value, PurchasePrice: PurchasePrice[i].value, StartingInventory: StartingInventory[i].value, CurrentInventory: CurrentInventory[i].value, ItemPurchases: ItemPurchases[i].value})
    };
    
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify(inventoryUpdate);

    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/api/audits`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  };

  if(loadState) {
    return (
      <form onSubmit={handleSubmit}>
        {auditState.map((audit) => {
          return (
            <React.Fragment>
              <label htmlFor={audit.auditId}>${audit.itemName}: Previous Inventory: {audit.startingInventory} Current Inventory: </label>
              <input type="text" name=
              "CurrentInventory" id={audit.auditId} />
              <input type="hidden" name="ItemName" value={audit.itemName} />
              <input type="hidden" name="ItemId" value={audit.itemId} />
              <input type="hidden" name="PurchasePrice" value={audit.purchasePrice} />
              <input type="hidden" name="StartingInventory" value={audit.startingInventory} />
              <input type="hidden" name="ItemPurchases" value={audit.itemPurchases} />
              <br />
            </React.Fragment>
          )
        })}
        <button type="submit">Submit Inventory</button>
      </form>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}

export default AuditForm;