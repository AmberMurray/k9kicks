import React, { Component } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';
import Credit from './Credit';
import '../App.css';
import { Link } from 'react-router';
import { Table, Button} from 'react-bootstrap';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTotal: 0,
      showcheckout: false
    }
    this.startCheckout = this.startCheckout.bind(this)
  }

  componentDidMount(){
    let total = 0;
    this.props.cart.map((item) => {
      total += item.price * item.quantity
    })
    this.setState({
      subTotal: total.toFixed(2)
    })
  }

  startCheckout(){
    console.log('hello', this.state, this)
    this.setState({showcheckout: true})
  }

  render() {
    const table = this.props.cart.length > 0 ?
    <div>
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
        <p className="col-md-offset-6">Subtotal&nbsp;${this.state.subTotal}</p> &nbsp;
        <Button bsStyle="primary" onClick={this.startCheckout}>Checkout</Button>
      </div>
    : <p>Your cart is empty</p>


    return (
      <div className="col-md-8">
        {table}
        {this.state.showcheckout!==false ?<div><div> <Checkout /></div> <div> <Credit /></div></div>: <a href="/products">Continue shopping</a>}
      </div>
    );
  }
}
export default ShoppingCart;
