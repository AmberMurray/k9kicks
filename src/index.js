import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path ="/" component={App}/>
    <Route path ="/products" component={ProductsList}/>
  </Router>)
  ,(document.getElementById('root'))
);
