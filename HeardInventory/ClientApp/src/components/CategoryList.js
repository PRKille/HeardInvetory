import React, { useState, useEffect } from 'react';
import Category from './Category';

function CategoryList() {
  const [ categoryListState, setCategoryListState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);

  useEffect(() => {
    if (!loadState) {
      fetch(`http://localhost:5000/api/categories`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setCategoryListState(jsonifiedResponse);
        setLoadState(true);
        console.log("Category Loaded");
      })
      .catch((error) => {
        console.log('Category Load Error: ', error);
      });
    }
  },[]);

  if (loadState) {
    return (
      <React.Fragment>
        <h1>Categories:</h1>
        {categoryListState.map((category) => {
          return (
            <Category
              categoryName={category.categoryName}
              categoryId={category.categoryId}
              key={category.categoryId}
              />
            );
          })}
      </React.Fragment>
    );
  } else {
    return <div><h1>Loading...</h1></div>
  }
}

export default CategoryList;