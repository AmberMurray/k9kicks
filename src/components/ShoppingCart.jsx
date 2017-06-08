import React, { Component } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';
import '../App.css';
import { Link } from 'react-router';
import { Table, Button} from 'react-bootstrap';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTotal: 0,
      checkout: false
    }
    this.getSubTotal = this.getSubTotal.bind(this)
  }

  getSubTotal(total){
    this.setState({
      subTotal : this.state.subTotal + total
    })
  }

  startCheckout(){
    this.setState({
      checkout : true
    })
    console.log("checkout clicked");
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
            return <CartItem item={item} getSubTotal={this.getSubTotal}/>
          })
        }
        </tbody>
        <span className="col-md-offset-6">Subtotal</span>&nbsp;<span>{this.state.subTotal}</span> &nbsp;
        <Button bsStyle="primary" onClick={() => this.startCheckout.bind(this)}>Checkout</Button>
      </Table>
    : <p>Your cart is empty</p>
    return (
      <div className="col-md-8">
        {table}
        {this.state.checkout!==false ? <Checkout /> : <a href="/products">Continue shopping</a>}
      </div>
    );
  }
}
export default ShoppingCart;
