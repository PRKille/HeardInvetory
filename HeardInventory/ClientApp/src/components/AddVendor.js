import React from 'react';
import { useHistory } from 'react-router-dom';

function AddVendor() {

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { vendorName } = e.target;

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      vendorName: vendorName.value,
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/api/vendors`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        history.push('/vendors');
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="vendorName" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddVendor;