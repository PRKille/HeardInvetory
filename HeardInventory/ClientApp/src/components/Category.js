import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <h1>{props.categoryName}</h1>
      <h3>Items:</h3>
      <ul>
        {props.items.map((item) => {
          return (
            <li>{item.itemName}</li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

Item.propTypes = {
  categorName: PropTypes.string,
  categoryId: PropTypes.number,
  items: PropTypes.array
}

export default Item;