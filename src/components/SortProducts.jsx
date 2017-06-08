import React, { Component } from 'react';
import { Link } from 'react-router';
import { DropdownButton, MenuItem, FormGroup, ControlLabel,FormControl } from 'react-bootstrap';
import '../App.css';

class SortProducts extends Component {
  constructor(props) {
    super(props);
  }

  sortByPrice(event){
    this.props.sort(event.target.value);
  }

  render() {
    return (
      <div>
      <h4>Sort by Price</h4>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Sort by price</ControlLabel>
          <FormControl componentClass="select" placeholder="" onChange={this.sortByPrice.bind(this)}>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </FormControl>
        </FormGroup>
      </div>

    );
  }
}

export default SortProducts;
