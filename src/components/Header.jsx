import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown, Image, Glyphicon} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="nav-link" to='/'>k9kicks</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
            </Nav>
            <Nav pullRight>
              <NavItem><Link to="/products">Shop</Link></NavItem>
              <NavItem><Link to="/login">LogIn</Link></NavItem>
              <NavItem><Link to="/shoppingcart"><Glyphicon glyph="shopping-cart"/></Link>{this.props.numberOfItems}</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}
export default Header;
