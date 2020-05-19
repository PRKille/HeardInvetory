import React, { useState, useEffect } from 'react';

function CategoryDetails(props) {
  const { match: { params } } = props;
  const [ loadedState, setLoadedState ] = useState(false);
  const [ itemsState, setItemsState ] = useState({});

  useEffect(() => {
    if(!loadedState) {
    fetch(`http://localhost:5000/api/items/?category=${params.categoryName}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setItemsState(jsonifiedResponse);
        setLoadedState(true);
      })
      .catch((error) => {
        console.log('Item load Error: ', error);
      });
    }
  }, []);

  if(loadedState){
    return (
      <React.Fragment>
        <h1>{params.categoryName}</h1>
        {itemsState.map((item) => {
          return (
            <p>{item.itemName}</p>
          )
        })}
      </React.Fragment>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
};

export default CategoryDetails;