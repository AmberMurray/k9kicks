import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {

    console.log(this.props.children);
    return (
      <div>
        { this.props.children ?  <Header /> : null }
        {this.props.children || <Main />}
      </div>
    );
  }
}
export default App;
