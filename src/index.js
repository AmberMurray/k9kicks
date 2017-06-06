import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Main from './components/Main';
import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path ="/" component={App}/>
    <Route path ="/products" component={ProductsList}/>
    <Route path ="/products/:id" component={ProductDetail}/>
  </Router>)
  ,(document.getElementById('root'))
);
