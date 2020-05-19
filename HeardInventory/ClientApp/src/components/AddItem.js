import React from 'react';
import { useHistory } from 'react-router-dom';

function AddItem() {

  const history = useHistory();
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

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="itemName" placeholder="Name" />
      <input type="text" name="category" placeholder="CategoryId" />
      <input type="text" name="vendor" placeholder="VendorId" />
      <input type="text" name="purchasePrice" placeholder="Price" />
      <input type="text" name="purchaseQuantity" placeholder="Quantity" />
      <input type="text" name="purchaseQuantityType" placeholder="Quantity Type" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddItem;