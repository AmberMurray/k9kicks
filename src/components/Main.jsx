import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router'



class Main extends Component {
  render() {
    return (
      <div className='main'>
        <section className="home-image"></section>
        <div className='home-nav'>
          <h1 className="home-name">k9kicks</h1>
          <h1 className="home-tagline">Look Sharp</h1>
          <Link className="home-button-link" to="/products"><Button className="home-button btn btn-lg">Shop</Button></Link>
        </div>
      </div>
    )
  }
}

export default Main;
