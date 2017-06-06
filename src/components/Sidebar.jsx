import React, { Component } from 'react';
import { Link } from 'react-router';
import { Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import FilterProducts from './FilterProducts';
import '../App.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <FilterProducts filter={this.props.filter}/>
    );
  }
}
export default SideBar;
