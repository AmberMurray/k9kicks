import React, { Component } from 'react';
import '../App.css';
import { Image } from 'react-bootstrap';
import Background from './nerddog.jpg'

let sectionStyle = {
  width: '100%',
  height: '4000px',
  backgroundImage: `url(${Background})`
}



class Main extends Component {
  render() {
    return (
    <h1>hellow</h1>
    )
  }
}
export default Main;
