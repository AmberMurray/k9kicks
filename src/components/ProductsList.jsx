import React, { Component } from 'react';
import { Link } from 'react-router';
import { Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem } from 'react-bootstrap';
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
    const thumb = this.state.products.map(product =>{
      return(
        <Col xs={6} md={4} key={product.pid}>
          <Thumbnail src={product.image_url} alt="200x200">
            <h3>{product.product_name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
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
      )
    })

    return (
      <Grid>
        <Row>
          {thumb}
        </Row>
      </Grid>
    );
  }
}
export default ProductsList;
