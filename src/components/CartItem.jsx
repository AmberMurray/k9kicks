import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import '../App.css';
import { Link } from 'react-router';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown, Image, Glyphicon} from 'react-bootstrap';

class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  calculatePrice(quantity, price){
    return quantity * price;
  }

  render() {
    console.log("in cartitem", this.props);
    return (
      <tr>
        <td>{this.props.item.product_name}</td>
        <td>{this.props.item.quantity}</td>
        <td>{this.props.item.price}</td>
        <td>{this.calculatePrice(this.props.item.quantity,this.props.item.price)}</td>
      </tr>
    );
  }
}
export default CartItem;
