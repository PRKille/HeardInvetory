import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Vendor(props) {
  return (
    <React.Fragment>
      <h1>{props.vendorName}</h1>
      <Link to={`/vendors/${props.vendorName}/${props.vendorId}`}>
        <button>View Items</button>
      </Link>
    </React.Fragment>
  )
}

Vendor.propTypes = {
  vendorName: PropTypes.string,
  vendorId: PropTypes.number,
}

export default Vendor;