import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Main from './components/Main';
import Checkout from './components/Checkout';
import ShoppingCart from './components/ShoppingCart';
import './index.css';


ReactDOM.render((
  <div>
    <Router history={browserHistory}>
      <Route path ="/" component={App}>
        <Route path ="/products" component={ProductsList}/>
        <Route path ="/products/:id" component={ProductDetail}/>
        <Route path ="/checkout" component={Checkout}/>
        <Route path ="/shoppingcart" component={ShoppingCart}/>
      </Route>
    </Router>
  </div>)
  ,(document.getElementById('root'))
);
