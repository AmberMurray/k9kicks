import React, { Component } from 'react';
import { Link } from 'react-router';
import { Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem } from 'react-bootstrap';
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
    const thumb = (
      <Col xs={6} md={4} >
        <Thumbnail src={this.state.product.image_url} alt="200x200">
          <h3>{this.state.product.product_name}</h3>
          <p>{this.state.product.description}</p>
          <p>${this.state.product.price}</p>
          <span>
            <DropdownButton title="qty" id="bg-vertical-dropdown-2">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
            </DropdownButton>
          </span>
          <p>
            <Button bsStyle="primary">Add to cart</Button>&nbsp;
          </p>
        </Thumbnail>
      </Col>
    );

    return (
      <Grid>
        <Row>
          {thumb}
        </Row>
      </Grid>
    );
  }
}

export default ProductDetail;
