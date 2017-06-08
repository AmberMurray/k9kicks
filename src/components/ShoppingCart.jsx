import React, { Component } from 'react';
import CartItem from './CartItem';
import '../App.css';
import { Link } from 'react-router';
import { Table} from 'react-bootstrap';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const table = this.props.cart.length > 0 ?
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((item)=>{
            return <CartItem item={item}/>
          })
        }
        </tbody>
      </Table>
    : <p>Your cart is empty</p>
    return (
      <div className="col-md-8">
        {table}
      </div>
    );
  }
}
export default ShoppingCart;
