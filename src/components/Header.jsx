import React, { Component } from 'react';
import '../App.css';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown} from 'react-bootstrap';

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">k9kicks</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Shop</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/login">Login</NavItem>
        <NavItem eventKey={2} href="/shoppingCart">Shopping Cart</NavItem>
        <span className="glyphicon glyphicon-shopping-cart" img style=“margin: 0px 10px”></span>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);



class Header extends Component {
  render() {
    return (
      navbarInstance
    );
  }
}
export default Header;
