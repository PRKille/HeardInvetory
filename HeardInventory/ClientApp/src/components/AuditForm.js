import React, { useEffect, useState } from 'react';

function AuditForm() {
  const [ auditState, setAuditState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);
  useEffect(() => {
    if(!loadState) {
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
    }
  },[]);

  if(loadState) {
    return (
      <form onSubmit={handleSubmit}>
        {auditState.map((audit) => {
          return (
            <React.Fragment>
              <label for={audit.auditId}>${audit.itemName}: Previous Inventory: {audit.startingInventory} Current Inventory: </label>
              <input type="text" name="currentInventory" id={audit.auditId} />
            </React.Fragment>
          )
        })}
        <button type="submit">Submit Inventory</button>
      </form>
    )
  }
}

export default AuditForm;