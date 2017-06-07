import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router';
import { Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem,FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      productReviews: []
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


  getDiscountPrice() {
    if(this.state.product.rate !== 0) {
    const rate = ((this.state.product.rate) /100);
    const price = (this.state.product.price);
    return 'SALE PRICE: $' + (Math.round(((price - (rate * price)) * 100)) /100).toFixed(2);
    }
  }



  render() {
    const reviews = this.state.productReviews.map((productReview) => {
        return(
          <Col xs={12} md={14}key={productReview.pid}>
            <Thumbnail>
              <h4>{productReview.content}</h4>
              <h4>Rating: {productReview.rating}</h4>
              <h4>Left by: {productReview.username}</h4>
            </Thumbnail>
          </Col>
        )
      })

    const thumb = (
      <Col xs={12} md={14} >
        <Thumbnail src={this.state.product.image_url} alt="200x200">
          <h3>{this.state.product.product_name}</h3>
          <p>{this.state.product.description}</p>
          <p>${this.state.product.price}</p>
          <p className='discount'>{this.getDiscountPrice(this.state.product.price)}</p>
          <span>
            <DropdownButton title="qty" id="bg-vertical-dropdown-2">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
            </DropdownButton>
          </span>
          <p>
            <Button bsStyle="primary">Add to cart</Button>&nbsp;
          </p>
        </Thumbnail>
          <h3>Product Reviews</h3>
      </Col>
    );

    const addReview = (
      <Col xs={12} md={14}>
        <h3>Add A Product Review</h3>
        <Thumbnail>
          <form>
      <FormGroup
        controlId="formBasicText">
        <ControlLabel>Leave a Product Review</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange}
        />
        <ControlLabel>Rating</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="1 - 5 "
          onChange={this.handleChange}
        />
      </FormGroup>
    </form>
    <p>
      <Button bsStyle="primary">Add Review</Button>&nbsp;
    </p>
        </Thumbnail>
      </Col>
    )

    return (
    <div>
      <Header />
        <Grid>
          <Row>
          {thumb}
          {reviews}
          {addReview}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ProductDetail;
