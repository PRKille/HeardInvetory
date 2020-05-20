import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditItem(props) {
  const { match: { params } } = props;
  const [ itemState, setItemState ] = useState({});
  const [ categoryState, setCategoryState ] = useState([]);
  const [ vendorState, setVendorState ] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${params.itemId}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setItemState(jsonifiedResponse);
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
      })
      .catch((error) => {
        console.log('Item Load Error: ', error);
      });
  }, []);

  const handleDelete = id => {
    fetch(`http://localhost:5000/api/items/${id}`, { method : 'DELETE'})
      .then((response) => console.log('DELETED', response))
      .then(() => {
        history.push('/items');
      })
  }

  const handleSubmit = e => {
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
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label for="itemName">Item</label>
        <input type="text" name="itemName" defaultValue={itemState.itemName} />
        <select name="category">
          <option>Select Category</option>
          {categoryOptions}
        </select>
        <select name="vendor">
          <option>Select Vendor</option>
          {vendorOptions}
        </select>
        <label for="purchasePrice">Price</label>
        <input type="text" name="purchasePrice" defaultValue={itemState.purchasePrice} />
        <label for="purchaseQuantity">Amount</label>
        <input type="text" name="purchaseQuantity" defaultValue={itemState.purchaseQuantity} />
        <label for="purchaseQuantityType">Type</label>
        <input type="text" name="purchaseQuantityType" defaultValue={itemState.purchaseQuantityType} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => {handleDelete(itemState.itemId)}}>Delete</button>
    </React.Fragment>
  )
}

export default EditItem;