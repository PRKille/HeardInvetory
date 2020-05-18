import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <NavMenu />
      <h1>Heard! Inventory Solutions</h1>
    </BrowserRouter>
  );
}

export default App;