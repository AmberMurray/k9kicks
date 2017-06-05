import React, { Component } from 'react';
import '../App.css';

class ProductsList extends Component {
  state = {products: []}
  componentDidMount() {
   fetch('/products')
      .then(res => {
        return res.json();
      })
      .then(products => this.setState({ products }));
  }
  render() {
    return (
      <div className="ProductsList">
        <h1>Products</h1>
        {this.state.products.map(product =>
          <div key={product.id}>{product.product_name}</div>
    
        )}
      </div>
    );
  }
}
export default ProductsList;
