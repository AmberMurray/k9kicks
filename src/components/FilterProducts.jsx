import React, { Component } from 'react';
import { Link } from 'react-router';
import { Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import '../App.css';

class FilterProducts extends Component {
  constructor(props) {
    super(props);
  }

  changeFilter(event){
    this.props.setFilter(event.target.innerText);
  }

  render() {
    return (
      <div className="side-bar well">
        <h4>Filter by Category</h4>
        <hr></hr>
        <div className="prod-filter">
          <p><a href="#" key="Seasonal" ref="Seasonal"  onClick={this.changeFilter.bind(this)}>Seasonal</a></p>
          <p><a href="#" key="Fashion" ref="Fashion" onClick={this.changeFilter.bind(this)}>Fashion</a></p>
          <p><a href="#" key="Athletic" ref="Athletic" onClick={this.changeFilter.bind(this)}>Athletic</a></p>
          <p><a href="#" key="Casual" ref="Casual" onClick={this.changeFilter.bind(this)}>Casual</a></p>
          <p><a href="#" key="All" ref="All" onClick={this.changeFilter.bind(this)}>All</a></p>
        </div>
      </div>
    );
  }
}

export default FilterProducts;
