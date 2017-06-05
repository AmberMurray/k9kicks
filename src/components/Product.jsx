import React, { Component } from 'react';
import '../App.css';

class Product extends Component {
  state = {product: []}
  componentDidMount() {
   fetch('/products/:id')
      .then(res => {
        return res.json();
      })
      .then(product => this.setState({ product }));
  }
  render() {
    return (
      <div className="Product">
        <h1>{this.state.product.product_name}</h1>
          <div key={this.state.product.id}>{this.state.product.product_name}</div>
        )}
      </div>
    );
  }
}
export default Product;
