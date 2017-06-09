import React, { Component } from 'react';
import '../App.css';
//import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <ControlLabel>Login </ControlLabel>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder={this.state.user.username}
        onChange={this.handleChange}
        />
      <FormControl.Feedback />
      <ControlLabel>Password </ControlLabel>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder={this.state.user.password}
        onChange={this.handleChange}
        />
    <Button bsStyle="primary" type="submit">
      Login
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


export default Login;
