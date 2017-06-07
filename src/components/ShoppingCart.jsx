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
    console.log("in cart", this.props.cart);
    return (
      <div className="col-md-8">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item)=>{
              return <CartItem item={item}/>
            })
          }
          </tbody>
        </Table>
      </div>
    );

  }
}
export default ShoppingCart;
