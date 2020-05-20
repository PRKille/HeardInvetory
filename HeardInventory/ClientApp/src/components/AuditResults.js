import React, { useState, useEffect } from 'react';

function AuditResults() {

  const [ auditState, setAuditState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);
  const [ costState, setCostState ] = useState(null);
  
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

  const foodCost = sales => {
    let startingInventory = 0;
    let purchases = 0;
    let endingInventory = 0;
    auditState.forEach((audit) =>{
      startingInventory = startingInventory + audit.startingInventory * audit.purchasePrice;
      purchases = purchases + audit.itemPurchases * audit.purchasePrice;
      endingInventory = endingInventory + audit.currentInventory * audit.purchasePrice;
    })
    return (startingInventory+purchases-endingInventory)/sales;
  }

  const calculateFoodCost = (e) => {
    setCostState(foodCost(e.target.sales.value));
  }
  
  let currentView = null;

  if(costState != null) {
    currentView = 
    <React.Fragment>
      <h1>Your Food Cost:</h1>
      <h3>{costState}</h3>
    </React.Fragment>
  } else {
    currentView =
    <React.Fragment>
      <form onSubmit={calculateFoodCost}>
        <label>Enter your total food sales:</label>
        <input type="text" name="sales" />
        <button type="submit">Calculate</button>
      </form>
    </React.Fragment>
  }

  if(loadState){
    return (
      <React.Fragment>
        {currentView}
      </React.Fragment>
    )
  } else {
    return(
      <h1>Loading...</h1>
    )
  }
}

export default AuditResults;