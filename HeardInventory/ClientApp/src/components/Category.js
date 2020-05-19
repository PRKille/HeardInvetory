import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Category(props) {
  return (
    <React.Fragment>
      <h1>{props.categoryName}</h1>
      <Link to={`/categories/${props.categoryName}/${props.categoryId}`}>
        <button>View Items</button>
      </Link>
    </React.Fragment>
  )
}

Category.propTypes = {
  categoryName: PropTypes.string,
  categoryId: PropTypes.number,
}

export default Category;