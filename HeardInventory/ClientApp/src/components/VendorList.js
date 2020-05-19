import React, { useState, useEffect } from 'react';
import Vendor from './Vendor';
import { Link } from 'react-router-dom';

function VendorList() {
  const [ vendorListState, setVendorListState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);

  useEffect(() => {
    if (!loadState) {
      fetch(`http://localhost:5000/api/vendors`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setVendorListState(jsonifiedResponse);
        setLoadState(true);
      })
      .catch((error) => {
        console.log('Vendor Load Error: ', error);
      });
    }
  },[]);

  if (loadState) {
    return (
      <React.Fragment>
        <h1>Vendors:</h1>
        {vendorListState.map((vendor) => {
          return (
            <Vendor
              vendorName={vendor.vendorName}
              vendorId={vendor.vendorId}
              key={vendor.vendorId}
              />
            );
          })}
          <br />
          <Link to="/vendors/add">
          <button>Add New Vendor</button>
        </Link>
      </React.Fragment>
    );
  } else {
    return <div><h1>Loading...</h1></div>
  }
}

export default VendorList;