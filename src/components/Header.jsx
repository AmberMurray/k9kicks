import React, { Component } from 'react';
import '../App.css';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown, Image, Glyphicon} from 'react-bootstrap';

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
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/products">Shop</NavItem>
        <NavItem eventKey={2} href="/login">Login</NavItem>
        <NavItem eventKey={3} href="/shoppingCart"><Glyphicon glyph="shopping-cart"/></NavItem>

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
