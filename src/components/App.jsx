import React, { Component } from 'react';
import { Redirect, browserHistory } from 'react-router'
import '../App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[],
      cart:[],
      numberOfItems: 0,
      isLoggedIn: false,
      loggedInUser: ''
    };
    this.addToCart = this.addToCart.bind(this)
    this.deleteCartItem = this.deleteCartItem.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  componentDidUpdate(prevProps) {
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

    if (isLoggingIn) {
       //<Redirect to="/products"/>
       browserHistory.goBack()
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
      //<Redirect to="/products"/>
      browserHistory.push('/products')
    }
  }

  addUser(newUser){
    this.setState({
      user: this.state.user.concat(newUser),
      isLoggedIn: !this.state.isLoggedIn,
      //loggedInUser: this.state.user[0].username,
    })
    console.log(this.state.user);
    browserHistory.push('/products')
  }

  addToCart(newItem){
    this.setState({
      cart: this.state.cart.concat(newItem),
      numberOfItems: this.state.numberOfItems + 1
    })
  }

  deleteCartItem(item){
    const index = this.state.cart.indexOf(item)
    this.setState({
      cart: this.state.cart.filter((_, i) => i !== index),
      numberOfItems: this.state.numberOfItems - 1
    });
  }

  render() {
    return (
      <div>
        { this.props.children
          ? <div>
              <Header numberOfItems={this.state.numberOfItems} isLoggedIn={this.state.isLoggedIn}/>
              {/* <Header numberOfItems={this.state.numberOfItems} isLoggedIn={this.state.isLoggedIn} loggedInUser={this.state.loggedInUser}/> */}
              {React.cloneElement(this.props.children, {...this.state, addToCart: this.addToCart, deleteCartItem: this.deleteCartItem, addUser: this.addUser})}
            </div>
          : <Main />
        }
      </div>
    );
  }
}

export default App
