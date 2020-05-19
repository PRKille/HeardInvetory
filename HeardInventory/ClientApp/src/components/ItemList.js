import React, { useEffect, useState } from 'react';
import Item from './Item';

function ItemList() {
  const [ itemListState, setItemListState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);

  useEffect(() => {
    if (!loadState) {
      fetch(`http://localhost:5000/api/items`)
        .then((response) => {
          return response.json();
        })
        .then((jsonifiedResponse) => {
          jsonifiedResponse.sort((a,b) => a.itemId - b.itemId);
          setItemListState(jsonifiedResponse);
          setLoadState(true);
        })
      .catch((error) => {
        console.log('Inventory Error: ', error);
      });
    }
  },[]);
 
  if (loadState) {
    return (
      <React.Fragment>
        <h1>Inventory Items</h1>
        {itemListState.map((item) => {
          return (
            <Item
              itemName={item.itemName}
              category={item.category.categoryName}
              vendor={item.vendor.vendorName}
              purchasePrice={item.purchasePrice}
              purchaseQuantity ={item.purchaseQuantity}
              purchaseQuantityType={item.purchaseQuantityType}
              startingInventory={item.startingInventory}
              itemId={item.itemId}
              key={item.itemId}
              />
            );
          })}
      </React.Fragment>
    );
  } else {
    return <div><h1>Loading...</h1></div>
  }
}

export default ItemList;