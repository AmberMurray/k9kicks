import React, { Component } from 'react';
import { Link } from 'react-router';
import { Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import '../App.css';

class FilterProducts extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <p>Filter by Category</p>
        <div>
          <p><a href="#">Seasonal</a></p>
          <p><a href="#">Fashion</a></p>
          <p><a href="#">Athletic</a></p>
          <p><a href="#">Casual</a></p>
        </div>
    </div>
    );
  }
}

export default FilterProducts;
