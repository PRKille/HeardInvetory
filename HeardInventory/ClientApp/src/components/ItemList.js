import React, { useEffect, useState } from 'react';
import Item from './Item';

function ItemList() {
  const [ itemListState, setItemListState ] = useState([]);
  const [ categoryListState, setCategoryListState ] = useState([]);
  const [ vendorListState, setVendorListState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);

  useEffect(() => {
    if (!loadState) {
      fetch(`http://localhost:5000/api/categories`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setCategoryListState(jsonifiedResponse);
      })
      .catch((error) => {
        console.log('Category Load Error: ', error);
      });
      fetch(`http://localhost:5000/api/vendors`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setVendorListState(jsonifiedResponse);
      })
      .catch((error) => {
        console.log('Venor Load Error: ', error);
      });
      fetch(`http://localhost:5000/api/items`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setItemListState(jsonifiedResponse);
        setLoadState(true);
      })
      .catch((error) => {
        console.log('Inventory Error: ', error);
      });
    }
  });
 
  if (loadState) {
    return (
      <React.Fragment>
        <h1>Inventory Items</h1>
        {itemListState.map((item) => {
          var categoryName = categoryListState[item.categoryId-1].categoryName;
          var vendorName = vendorListState[item.vendorId-1].vendorName;
          return (
            <Item
              itemName={item.itemName}
              category={categoryName}
              vendor={vendorName}
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