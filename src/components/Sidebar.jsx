import React, { Component } from 'react'
import FilterProducts from './FilterProducts'
import SortProducts from './SortProducts'
import '../App.css'

class SideBar extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="side-bar well">
        <FilterProducts setCategoryFilter={this.props.setCategoryFilter} setPriceFilter={this.props.setPriceFilter}/>
        <hr></hr>
        <SortProducts sort={this.props.sort} />
      </div>
    )
  }
}
export default SideBar
