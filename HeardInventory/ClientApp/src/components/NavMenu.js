import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './NavMenu.css';

function NavMenu()  {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar className="ng-white border-bottom box-shadow mb-3" light>
          <NavbarBrand href="/" className="mr-auto">Heard!</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="text-dark" href="/items">All Items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="/add">Add Item</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="/categories">Your Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="/vendors">Your Vendors</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
export default NavMenu;