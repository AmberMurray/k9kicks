import React, { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import SideBar from './Sidebar'
import '../App.css'

class ProductsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      filter: 'All',
      filterBy: '',
      sortBy: '',
      selectedQuantity: ''
    }
    this.addItemToCart = this.addItemToCart.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  componentDidMount() {
    fetch('/api/products')
    .then(res => {
      return res.json()
    })
    .then(products => {
      this.setState({ products })
    })
  }

  makeOptions(qty){
    const menuItems = []
    qty > 10 ? qty=10 : qty
    for (let i=1; i<=qty;  i++){
      menuItems.push(<option value={i} onClick={() =>  this.updateQuantity(i)}>{i}</option>)
    }
    return menuItems
  }

  setCategoryFilter(value){
    this.setState({
      filter : value,
      filterBy: 'category'
    })
  }

  setPriceFilter(value){
    this.setState({
      filter : value,
      filterBy: 'price'
    })
  }

  filterByPrice(filteredProducts){
    if (this.state.filter==="0"){
      filteredProducts = this.state.products.filter(product => {
        return product.price <= 25
      })} else if (this.state.filter==="25"){
        filteredProducts = this.state.products.filter(product => {
          return product.price >= 25 && product.price <=50
        })} else if (this.state.filter==="50"){
          filteredProducts = this.state.products.filter(product => {
            return product.price >= 50 && product.price <=75
          })} else {
          filteredProducts = this.state.products.filter(product => {
          return product.price >= 75
          })}

    return filteredProducts
  }

  addItemToCart(product){
    let qty = this.state.selectedQuantity || 1
    let newItem = {
      product_id : product.pid,
      product_name : product.product_name,
      quantity : qty,
      price : product.price }
      this.props.addToCart(newItem)
    }

  updateQuantity(event){
    this.setState({
      selectedQuantity: event.target.value
    })
  }

  getDiscountPrice(product) {
    if (product.rate !== 0 ){
      const rate = ((product.rate) /100)
      const price = (product.price)
      return 'SALE PRICE: $' + (Math.round(((price - (rate * price)) * 100)) /100).toFixed(2)
    }
  }

  sort(text){
    this.setState({
      sortBy : text
    })
  }

  render() {
    let filteredProducts = []
    this.state.filter === "All" ? filteredProducts = this.state.products :
    this.state.filterBy === "category" ?
    filteredProducts = this.state.products.filter(product => {
      return product.category_name.indexOf(this.state.filter) !== -1})
      : filteredProducts = this.filterByPrice(filteredProducts)

      this.state.sortBy === "Low to High" ?
      filteredProducts.sort(function(a,b){
        return parseInt(a.price)  - parseInt(b.price)
      }) : this.state.sortBy === "High to Low" ? filteredProducts.sort(function(a,b){
        return parseInt(b.price)  - parseInt(a.price)
      }) : filteredProducts

    const thumb = filteredProducts.map(product =>{
      return(
      <Col xs={6} md={4} key={product.pid}>
        <Thumbnail className="thumbnail" src={product.image_url} alt="image200x200">
          <h3>
            <Link to={`/products/${product.pid}`} key={product.pid}>{product.product_name}</Link></h3>
            <h4>{product.price}</h4>
            <h4 className='discount'>{this.getDiscountPrice(product)}</h4>
            <FormGroup controlId="formControlsSelect">
              <FormControl className="prod-qty" componentClass="select" placeholder="" onChange={this.updateQuantity.bind(this)}>
                {this.makeOptions(product.quantity)}
              </FormControl>
              <Button bsStyle="primary" className="prod-add-btn col-md-offset-1" onClick={() => this.addItemToCart(product)}>Add to cart</Button>
            </FormGroup>
          </Thumbnail>
        </Col>
      )
    })

    return (
      <div>
        <SideBar className="col-md-1"  setCategoryFilter={this.setCategoryFilter.bind(this)} setPriceFilter={this.setPriceFilter.bind(this)} sort={this.sort.bind(this)}/>
        <Grid className="col-md-8 col-md-offset-2 well">
          <Row>
            {thumb.length > 0 ? thumb : <h3 className="text-center">No matching products found</h3>}
          </Row>
        </Grid>
      </div>
    )
  }
}
export default ProductsList
