import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';



class Main extends Component {
  render() {
    return (
      <div className='main'>
        <section className="home-image"></section>
        <h1 className="home-name">k9Kicks</h1>
        <h1 className="home-tagline">Look Sharp</h1>
        <Button><Link to="/products">Shop</Link></Button>
      </div>
    )
  }
}

export default Main;
