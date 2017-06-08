import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart:[],
      numberOfItems: 0
    };
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart(newItem){
    this.setState({
      cart: this.state.cart.concat(newItem),
      numberOfItems: this.state.numberOfItems + 1
    })
  }

  render() {
    return (
      <div>
        { this.props.children
          ? <div>
              <Header numberOfItems={this.state.numberOfItems}/>
              {React.cloneElement(this.props.children, {...this.state, addToCart: this.addToCart})}
            </div>
          : <Main />
        }
      </div>
    );
  }
}
export default App;
