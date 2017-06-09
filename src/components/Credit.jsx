import React, { Component } from 'react';
import '../App.css';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Image, Grid, Row, Col, Thumbnail, Button, DropdownButton, MenuItem} from 'react-bootstrap';
import axios from 'axios';

class Credit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []};
  }

  componentWillMount() {
   axios.get(`/api/users`, this.state.credentials)
      .then(response => {
        this.setState({
          user : response.data[0],
        })
      })
      .catch(err => {
      })
  }

  handleChange(event) {
    this.setState({user: event.target.value })
  }

  handleSubmit(event) {
    alert('Address submitted: ' + this.state.user)
    event.prevenDefault();
  }

  render() {
  const form = (
    <form className="col-md-4 col-md-offset-2">
      <FormGroup >
      <ControlLabel>Payment Info </ControlLabel>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder={this.state.user.first_name + " " + this.state.user.last_name}
        onChange={this.handleChange}
        />
      <FormControl.Feedback />
      <ControlLabel>Name as Appears on Credit Card </ControlLabel>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder='4545-7890-5656-5674'
        onChange={this.handleChange}
        />
      <FormControl.Feedback />
      <ControlLabel>Credit Card Number </ControlLabel>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder='09-18'
        onChange={this.handleChange}
        />
      <FormControl.Feedback />
      <ControlLabel>Expiration Date </ControlLabel>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder='4545-7890-5656-5674'
        onChange={this.handleChange}
        />
      <FormControl.Feedback />
      <ControlLabel>CVC </ControlLabel>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder='676'
        onChange={this.handleChange}
        />
    <Button bsStyle="primary" type="submit">
      Finish Checkout
    </Button>
  </FormGroup >
  </form>
  )

    return (
        <div className="container">
        {form}
        </div>

    );
  }
}


export default Credit;
