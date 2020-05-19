import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditItem(props) {
  const { match: { params } } = props;
  const [ itemState, setItemState ] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${params.itemId}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setItemState(jsonifiedResponse);
      })
      .catch((error) => {
        console.log('Item Load Error: ', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { itemName, category, vendor, purchasePrice, purchaseQuantity, purchaseQuantityType } = e.target;

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      itemId: params.itemId,
      itemName: itemName.value,
      categoryId: category.value,
      vendorId: vendor.value,
      purchasePrice: purchasePrice.value,
      purchaseQuantity: purchaseQuantity.value,
      purchaseQuantityType: purchaseQuantityType.value
    });

    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/api/items/${params.itemId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        history.push('/items');
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="itemName" defaultValue={itemState.itemName} />
      <input type="text" name="category" defaultValue={itemState.category.categoryId} />
      <input type="text" name="vendor" defaultValue={itemState.vendor.vendorId} />
      <input type="text" name="purchasePrice" defaultValue={itemState.purchasePrice} />
      <input type="text" name="purchaseQuantity" defaultValue={itemState.purchaseQuantity} />
      <input type="text" name="purchaseQuantityType" defaultValue={itemState.purchaseQuantityType} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditItem;