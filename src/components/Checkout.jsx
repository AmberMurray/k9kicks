import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import axios from 'axios';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentWillMount() {
   axios.get(`/api/users/${this.props.params.id}`)
      .then(response => {

        console.log(response);
        this.setState({
          user : response.data[0],
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="container">

      <form className="col-md-4">
        <FormGroup >
        <ControlLabel>Customer Billing Address</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder={this.state.user.first_name}
          onChange={this.handleChange}
          />
        <FormControl.Feedback />
        <HelpBlock>First Name As Appears on Credit Card</HelpBlock>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder={this.state.user.last_name}
          onChange={this.handleChange}
          />
        <FormControl.Feedback />
        <HelpBlock>Last Name As Appears on Credit Card.</HelpBlock>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder={this.state.user.address_line1}
          onChange={this.handleChange}
          />
        <FormControl.Feedback />
        <HelpBlock>Address Line 1 on Credit Card.</HelpBlock>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder={this.state.user.address_line2}
          onChange={this.handleChange}
          />
        <FormControl.Feedback />
        <HelpBlock>City on Credit Card.</HelpBlock>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder={this.state.user.city}
          onChange={this.handleChange}
          />
        <FormControl.Feedback />
        <HelpBlock>Address Line 2 on Credit Card.</HelpBlock>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder={this.state.user.address_line2}
          onChange={this.handleChange}
          />
        <FormControl.Feedback />
        <HelpBlock>Address Line 2 on Credit Card.</HelpBlock>
      </FormGroup>
    </form>
      </div>
    );
  }


}





export default Checkout;
