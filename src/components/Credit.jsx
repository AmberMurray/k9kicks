import React, { Component } from 'react'
import '../App.css'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import axios from 'axios'

class Credit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []}
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
    event.prevenDefault()
  }

  render() {
    const form = (
      <form className="col-md-4 col-md-offset-4">
        <h3 className="text-center">Payment Info</h3>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.first_name + " " + this.state.user.last_name}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <ControlLabel>Credit Card Number </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder='4545-7890-5656-5674'
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <ControlLabel>Exp Date </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder='09-18'
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <ControlLabel>Card Number </ControlLabel>
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
          <br/><br/>
          <Button className="prod-add-btn col-md-offset-4" bsStyle="primary" type="submit">
            Buy It!!
          </Button>
        </FormGroup >
      </form>
    )

    return (
      <div className="container">
        <br/>
        <br/>
        {form}
      </div>
    )
  }
}

export default Credit
