import React, { Component } from 'react';
import '../App.css';
import { Well } from 'react-bootstrap';

const wellInstance = (
  <div>
    <Well bsSize="small">k9kicks</Well>
  </div>
);


class Footer extends Component {
  render() {
    return (
      wellInstance
    );
  }
}
export default Footer;
