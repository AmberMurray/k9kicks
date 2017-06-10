import React, { Component } from 'react'
import '../App.css'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('/api/users/login', user)
    .then(response => {
      if (response.data.error){
        alert("Username or password does not exist")
      } else {
        browserHistory.push('/products')
      }
      this.props.addUser(response.data)
    })
    .catch(err => {
      console.error(err)
      alert("Username or password does not exist")
    })
  }

  render() {
    const form = (
      <form className="col-md-4 col-md-offset-2">
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleUsernameChange}
          />
          <FormControl.Feedback />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handlePasswordChange}
          />
          <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>
            Login
          </Button>
        </FormGroup>
      </form>
    )

    return (
      <div className="container">
        {form}
      </div>
    )
  }
}
export default Login
