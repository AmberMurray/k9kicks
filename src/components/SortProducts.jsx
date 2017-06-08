import React, { Component } from 'react';
import { Link } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import '../App.css';

class SortProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue : ''
    }
  }

  sortByPrice(event){
    this.setState({
      selectedValue : event.target.innerText
    })

    this.props.sort(event.target.innerText);
  }

  render() {
    return (
      <div>
      <h4>Sort by Price</h4>
        <DropdownButton title={this.state.selectedvalue} width="20px" id="bg-vertical-dropdown-2" >
          <MenuItem eventkey="1" onSelect={() => this.sortByPrice}>Low to High</MenuItem>
          <MenuItem eventkey="2" onSelect={() => this.sortByPrice}>High to Low</MenuItem>
        </DropdownButton>
    </div>

    );
  }
}

export default SortProducts;
