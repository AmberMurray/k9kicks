import React, { Component } from 'react';
import '../App.css';
import { Jumbotron, Image, Button } from 'react-bootstrap';


const jumbotronInstance = (
  <Jumbotron className="col-md-6 col-md-offset-3" display="inline-block">
    <h1 className="text-center">Hello, world!</h1>
    <Image className="home-image" src="/images/chihuahua-shoes.jpg" responsive />
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
);


class Main extends Component {
  render() {
    return (
      jumbotronInstance
    )
  }
}
export default Main;
