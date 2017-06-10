import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem,FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import '../App.css'
import axios from 'axios'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: '',
      productReviews: [],
      selectedQuantityValue: ''
    }
  }

  componentWillMount() {
    axios.get(`/api/products/${this.props.params.id}`)
    .then(response => {
      this.setState({
        product : response.data[0],
        productReviews: response.data[1]
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  getDiscountPrice(product) {
    if (product.rate !== 0 ){
      const rate = ((product.rate) /100)
      const price = (product.price)
      return 'SALE PRICE: $' + (Math.round(((price - (rate * price)) * 100)) /100).toFixed(2)
    }
  }

  makeMenuItems(qty){
    console.log(qty)
    const menuItems = []
    qty > 10 ? qty=10 : qty
    for (let i=1; i<=qty;  i++){
      menuItems.push(<MenuItem eventkey="{i}" onSelect={() => this.updateQuantity} value={this.state.selectedQuantityValue}  >{i}</MenuItem>)
    }
    return menuItems
  }

  addItemToCart(product){
    console.log(product)

    let newItem = {
      product_id : product.product_id,
      product_name : product.product_name,
      quantity : 1,
      price : product.price }
      console.log(newItem)
      this.props.addToCart(newItem)
    }

  updateQuantity(event){
    console.log(this.state.selectedQuantity)
    this.setState({
      selectedQuantity: event.target.value
    })
  }

  render() {
    const reviews = this.state.productReviews.map((productReview) => {
      return(
        <Col xs={12} md={14} key={productReview.pid}>
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
        <Thumbnail src={this.state.product.image_url}>
          <div className="container">
            <h3>{this.state.product.product_name}</h3>
            <div className="prod-desc">
              <h4 className="col-md-8 col-md-offset-2">{this.state.product.description}</h4>
            </div>
          </div>
          <h4>${this.state.product.price}</h4>
          <h4 className='discount'>{this.getDiscountPrice(this.state.product)}</h4>
          <div>
            <DropdownButton title="qty" className="single-prod-qty" id="bg-vertical-dropdown-2" onSelect={() => this.makeMenuItems(this.state.product.quantity)}>
            </DropdownButton>
            <Button id={this.state.product.product_id} bsStyle="primary" data={this.state.product} onClick={() => this.addItemToCart(this.state.product)}>Add to cart</Button>
            <Link to={`/products`}><Button className='col-sm-offset-1'>Keep Shopping</Button></Link>
          </div>
        </Thumbnail>
        <h3>Product Reviews</h3>
      </Col>
    )

    const addReview = (
      <Col xs={12} md={14}>
        <h3>Add A Product Review</h3>
        <Thumbnail>
          <form>
            <FormGroup
              controlId="formBasicText">
              <ControlLabel>Leave a Review</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <ControlLabel className="col-md-2">Rating</ControlLabel>
              <FormControl
                id="review-rating"
                type="text"
                value={this.state.value}
                placeholder="1 - 5"
                onChange={this.handleChange}
              />
            </FormGroup>
          </form>
          <p>
            <Button bsStyle="primary">Add Review</Button>&nbsp
          </p>
        </Thumbnail>
      </Col>
    )

    return (
      <div>
        <Grid>
          <Row>
            {thumb}
            {reviews}
            {addReview}
          </Row>
        </Grid>
      </div>
    )
  }
}
  export default ProductDetail
