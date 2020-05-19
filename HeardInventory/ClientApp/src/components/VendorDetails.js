import React, { useState, useEffect } from 'react';

function VendorDetails(props) {
  const { match: { params } } = props;
  const [ loadedState, setLoadedState ] = useState(false);
  const [ itemsState, setItemsState ] = useState({});

  useEffect(() => {
    if(!loadedState) {
    fetch(`http://localhost:5000/api/items/?vendor=${params.vendorName}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setItemsState(jsonifiedResponse);
        setLoadedState(true);
      })
      .catch((error) => {
        console.log('Item load Error: ', error);
      });
    }
  }, []);

  if(loadedState){
    return (
      <React.Fragment>
        <h1>{params.vendorName}</h1>
        {itemsState.map((item) => {
          return (
            <p>{item.itemName}</p>
          )
        })}
      </React.Fragment>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
};

export default VendorDetails;