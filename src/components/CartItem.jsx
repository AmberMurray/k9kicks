import React, { Component } from 'react'
import '../App.css'

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }
  calculateTotal(quantity, price){
    return (quantity * price).toFixed(2)
  }

  deleteItem(item){
    this.props.deleteCartItem(item)
  }
  render() {
    return (
      <tr>
        <td>{this.props.item.product_name}</td>
        <td>{this.props.item.quantity}</td>
        <td>{this.props.item.price}</td>
        <td>${this.calculateTotal(this.props.item.quantity, this.props.item.price)}</td>
        <td><a onClick={() => this.deleteItem(this.props.item)}>X</a></td>
      </tr>
    )
  }
}
export default CartItem
