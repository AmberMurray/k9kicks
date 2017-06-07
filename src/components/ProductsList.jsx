import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router';
import { Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import SideBar from './Sidebar';
import '../App.css';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filter: ''
    };
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
    qty > 10? qty=10 : qty
    for (let i=0; i<=qty ; i++){
      menuItems.push(<MenuItem eventKey="{i}">{i}</MenuItem>)
    }
    return menuItems
  }

  render() {
    const thumb = this.state.products.map(product =>{
      return(
        <Col xs={6} md={4} key={product.pid}>
          <Thumbnail className="thumbnail" src={product.image_url} alt="image200x200">
            <h3>
            <Link to={`/products/${product.pid}`} key={product.pid}>{product.product_name}</Link></h3>
            <p>${product.price}</p>
            <span>
              <DropdownButton title="qty" id="bg-vertical-dropdown-2">
                {this.makeMenuItems(product.quantity)}
              </DropdownButton>
            </span>
            <p>
              <Button bsStyle="primary">Add to cart</Button>&nbsp;
            </p>
          </Thumbnail>
        </Col>
      )
    })

    return (
    <div className="container-fluid">
            <SideBar class="col-md-1" filter={this.state.filter}/>
            <Grid class="col-md-10">
          <Row>
            {thumb}
          </Row>
        </Grid>
  </div>

    );
  }
}
export default ProductsList;
