import React from 'react';
import ItemList from './ItemList';
import NavMenu from './NavMenu';
import Home from './Home';
import AddItem from './AddItem';
import { BrowserRouter, Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import VendorList from './VendorList';
import CategoryDetails from './CategoryDetails';
import VendorDetails from './VendorDetails';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

function InventoryControl() {
  return (
    <BrowserRouter basename={baseUrl}>
      <NavMenu />
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={ItemList} />
      <Route exact path="/add" component={AddItem} />
      <Route exact path="/categories" component={CategoryList} />
      <Route exact path="/vendors" component={VendorList} />
      <Route path="/categories/:categoryName/:categoryId" component={CategoryDetails} />
      <Route path="/vendors/:vendorName/:vendorId" component={VendorDetails} />
    </BrowserRouter>
    );
  }
  
  export default InventoryControl;