import React from 'react';
import { useHistory } from 'react-router-dom';

function AddCategory() {

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { categoryName } = e.target;

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      categoryName: categoryName.value,
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/api/categories`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        history.push('/categories');
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="categoryName" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddCategory;