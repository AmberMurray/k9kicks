import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router';
import { Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import ProductDetail from './ProductDetail'
import SideBar from './Sidebar';
import '../App.css';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filter: '',
      selectedQuantity: 1
    };
    this.addItemToCart = this.addItemToCart.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount() {
   fetch('/api/products')
      .then(res => {
        return res.json();
      })
      .then(products => {
        this.setState({ products });
      })
  }

  makeMenuItems(qty){
    const menuItems = []
    qty > 10 ? qty=10 : qty
    for (let i=1; i<=qty ; i++){
      menuItems.push(<MenuItem eventkey="{i}" onSelect={() => this.updateQuantity} value={this.state.selectedQuantityValue}  >{i}</MenuItem>)
    }
    return menuItems
  }

  setFilter(value){
    this.setState({
     filter : value
   })
  }

  addItemToCart(product){

    let newItem = {
      product_id : product.pid,
      product_name : product.product_name,
      quantity : this.state.selectedQuantity,
      price : product.price }
    this.props.addToCart(newItem);
  }

  updateQuantity(event){
    console.log(this.state.selectedQuantity);
    this.setState({
      selectedQuantity: event.target.value
    });
  }

  render() {
    let filteredProducts = []
    this.state.filter === "All" ? filteredProducts = this.state.products : filteredProducts = this.state.products.filter(product => {
      return product.category_name.indexOf(this.state.filter) != -1;})

    const thumb = filteredProducts.map(product =>{
      return(
        <Col xs={6} md={4} key={product.pid}>
          <Thumbnail className="thumbnail" src={product.image_url} alt="image200x200">
            <h3>
            <Link to={`/products/${product.pid}`} key={product.pid}>{product.product_name}</Link></h3>
            <p>{product.price}</p>
            {/* <p className='discount'><ProductDetail getDiscountPrice={getDiscountPrice(product.price)}/></p> */}
            <span>Qty&nbsp;
              <DropdownButton title={this.state.selectedQuantity}   id="bg-vertical-dropdown-2" >
                {this.makeMenuItems(product.quantity)}
              </DropdownButton>
            </span>
            <p>
              <Button bsStyle="primary" onClick={() => this.addItemToCart(product)}>Add to cart</Button>&nbsp;
            </p>
          </Thumbnail>
        </Col>
      )
    })

    return (
    <div>
      <SideBar className="col-md-1" filter={this.state.filter} setFilter={this.setFilter.bind(this)}/>
      <Grid className="col-md-10">
        <Row>
          {thumb}
        </Row>
      </Grid>
  </div>
    );
  }
}
export default ProductsList;
