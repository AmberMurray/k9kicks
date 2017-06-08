import React, { Component } from 'react';
import { Link } from 'react-router';
import { Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import '../App.css';

class FilterProducts extends Component {
  constructor(props) {
    super(props);
  }

  changeCategoryFilter(event){
    this.props.setCategoryFilter(event.target.innerText);
  }

  changePriceFilter(event){
    this.props.setPriceFilter(event.target.id);
  }

  render() {
    return (
      <div>
        <p><a href="#" onClick={this.changeCategoryFilter.bind(this)}>All products</a></p>
        <h4>Filter by Category</h4>
        <hr></hr>
        <div className="prod-filter">
          <p><a href="#" onClick={this.changeCategoryFilter.bind(this)}>Seasonal</a></p>
          <p><a href="#" onClick={this.changeCategoryFilter.bind(this)}>Fashion</a></p>
          <p><a href="#" onClick={this.changeCategoryFilter.bind(this)}>Athletic</a></p>
          <p><a href="#" onClick={this.changeCategoryFilter.bind(this)}>Casual</a></p>
        </div>
        <hr></hr>
        <h4>Filter by Price</h4>
        <hr></hr>
        <div className="prod-filter">
          <p><a href="#" id="0" onClick={this.changePriceFilter.bind(this)}>$0 - 25</a></p>
          <p><a href="#" id="25" onClick={this.changePriceFilter.bind(this)}>$25 - 50</a></p>
          <p><a href="#" id="50" onClick={this.changePriceFilter.bind(this)}>$50 - 75</a></p>
          <p><a href="#" id="75" onClick={this.changePriceFilter.bind(this)}>Above $75</a></p>
        </div>
      </div>
    );
  }
}

export default FilterProducts;
