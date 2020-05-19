import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddItem() {
  const [ categoryState, setCategoryState ] = useState([]);
  const [ vendorState, setVendorState ] = useState([]);

  const history = useHistory();


    useEffect(() => {
      fetch(`http://localhost:5000/api/categories`)
        .then((response) => {
          return response.json();
        })
        .then((jsonifiedResponse) => {
          setCategoryState(jsonifiedResponse);
          fetch(`http://localhost:5000/api/vendors`)
            .then((response) => {
              return response.json();
            })
            .then((jsonifiedResponse) => {
              setVendorState(jsonifiedResponse);
            })
          .catch((error) => {
            console.log('Vendor Error: ', error);
          });
        })
      .catch((error) => {
        console.log('Category Error: ', error);
      });
    }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const { itemName, category, vendor, purchasePrice, purchaseQuantity, purchaseQuantityType } = e.target;

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      itemName: itemName.value,
      categoryId: category.value,
      vendorId: vendor.value,
      purchasePrice: purchasePrice.value,
      purchaseQuantity: purchaseQuantity.value,
      purchaseQuantityType: purchaseQuantityType.value
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/api/items`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        history.push('/items');
      })
      .catch((error) => console.log('error', error));
  };


      const categoryOptions = categoryState.map((category) => 
        <option
          value={category.categoryId}
          >
            {category.categoryName}
          </option>
        );

      const vendorOptions = vendorState.map((vendor) => 
        <option
          value={vendor.vendorId}
          >
            {vendor.vendorName}
          </option>
        );
    
      return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="itemName" placeholder="Name" />
        <select name="category">
          <option>Select Category</option>
          {categoryOptions}
        </select>
        <select name="vendor">
          <option>Select Vendor</option>
          {vendorOptions}
        </select>
        <input type="text" name="purchasePrice" placeholder="Price" />
        <input type="text" name="purchaseQuantity" placeholder="Quantity" />
        <input type="text" name="purchaseQuantityType" placeholder="Quantity Type" />
        <button type="submit">Submit</button>
      </form>
    )
  }


export default AddItem;