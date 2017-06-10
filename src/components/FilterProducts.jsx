import React, { Component } from 'react'
import '../App.css'

class FilterProducts extends Component {
  constructor(props) {
    super(props)
  }

  changeCategoryFilter(event){
    this.props.setCategoryFilter(event.target.innerText)
  }

  changePriceFilter(event){
    this.props.setPriceFilter(event.target.id)
  }

  render() {
    return (
      <div>
        <h4>Filter by Category</h4>
        <div className="prod-filter">
          <p><a onClick={this.changeCategoryFilter.bind(this)}>Seasonal</a></p>
          <p><a onClick={this.changeCategoryFilter.bind(this)}>Fashion</a></p>
          <p><a onClick={this.changeCategoryFilter.bind(this)}>Athletic</a></p>
          <p><a onClick={this.changeCategoryFilter.bind(this)}>Casual</a></p>
          <p><a onClick={this.changeCategoryFilter.bind(this)}>All</a></p>
        </div>
        <hr></hr>
        <h4>Filter by Price</h4>
        <div className="prod-filter">
          <p><a id="0" onClick={this.changePriceFilter.bind(this)}>$0 - 25</a></p>
          <p><a id="25" onClick={this.changePriceFilter.bind(this)}>$25 - 50</a></p>
          <p><a id="50" onClick={this.changePriceFilter.bind(this)}>$50 - 75</a></p>
          <p><a id="75" onClick={this.changePriceFilter.bind(this)}>Above $75</a></p>
        </div>
      </div>
    )
  }
}

export default FilterProducts
