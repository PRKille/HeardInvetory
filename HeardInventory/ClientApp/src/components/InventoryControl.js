import React from 'react';
import ItemList from './ItemList';
import NavMenu from './NavMenu';
import Home from './Home';
import AddItem from './AddItem';
import { BrowserRouter, Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import CategoryDetails from './CategoryDetails';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

function InventoryControl() {
  return (
    <BrowserRouter basename={baseUrl}>
      <NavMenu />
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={ItemList} />
      <Route exact path="/add" component={AddItem} />
      <Route exact path="/categories" component={CategoryList} />
      <Route path="/categories/:categoryName/:categoryId" component={CategoryDetails} />
    </BrowserRouter>
    );
  }
  
  export default InventoryControl;