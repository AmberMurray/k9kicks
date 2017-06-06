import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      productReviews: ''
    };
  }

  componentWillMount() {
   axios.get(`/api/products/${this.props.params.id}`)
      .then(response => {

        console.log(response);
        this.setState({
          product : response.data[0],
          productReviews: response.data[1]

        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <div className="Product">
        <h1>Hello</h1>
        <h1>{this.state.product.product_name}</h1>
        <p>{this.state.product.description}</p>



          <div key={this.state.product.product_id}>{this.state.product.product_name}</div>

      </div>


    );
  }
}
export default ProductDetail;
