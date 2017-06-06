import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
   fetch('/api/products')
      .then(res => {
        return res.json();
      })
      .then(products => this.setState({ products }));
  }
  render() {
    return (
      <div className="ProductsList">
        <h1>Products</h1>
        <ul>
        {this.state.products.map(product =>
          <li><Link to={`/products/${product.pid}`} key={product.pid}>{product.product_name}</Link></li>
        )}
      </ul>
      </div>
    );
  }
}
export default ProductsList;
