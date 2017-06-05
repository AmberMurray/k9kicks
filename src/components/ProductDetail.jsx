import React, { Component } from 'react';
import '../App.css';

class ProductDetail extends Component {
  state = {product: []}
  componentDidMount() {
   fetch(`/api/products/${this.props.params.id}`)
      .then(res => {
        return res.json();
      })
      .then(product => this.setState({ product }));
  }
  render() {
    return (
      <div className="Product">
        <h1>{this.state.product[0].product_name}</h1>
          <div key={this.state.product[0].product_id}>{this.state.product[0].product_name}</div>
      </div>
    );
  }
}
export default ProductDetail;
