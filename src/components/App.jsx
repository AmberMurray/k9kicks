import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Main />
      </div>
    );
  }
}
export default App;
