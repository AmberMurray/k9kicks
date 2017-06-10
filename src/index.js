import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import ProductsList from './components/ProductsList'
import ProductDetail from './components/ProductDetail'
import Checkout from './components/Checkout'
import ShoppingCart from './components/ShoppingCart'
import Login from './components/Login'
import Credit from './components/Credit'

ReactDOM.render((
  <div>
    <Router history={browserHistory}>
      <Route path ="/" component={App}>
      <Route path ="/products" component={ProductsList}/>
      <Route path ="/products/:id" component={ProductDetail}/>
      <Route path ="/shoppingcart" component={ShoppingCart}/>
      <Route path ="/login" component={Login}/>
      <Route path ="/checkout" component={Checkout}/>
    </Route>
    </Router>
  </div>)
,(document.getElementById('root'))
)
