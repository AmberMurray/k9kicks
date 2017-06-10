import React, { Component } from 'react'
import '../App.css'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap'
import axios from 'axios'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

  componentWillMount() {
    axios.get(`/api/users/2`)
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

    const billing = (
      <form className="col-md-4 col-md-offset-1">
        <FormGroup >
          <ControlLabel>Billing Address </ControlLabel>
          <FormControl
            type="text"
            value={this.state.user.first_name}
          />
          <FormControl.Feedback />
          <HelpBlock>First Name </HelpBlock>
          <FormControl
            type="text"
            value={this.state.user.last_name}
          />
          <FormControl.Feedback />
          <HelpBlock>Last Name </HelpBlock>
          <FormControl
            type="text"
            value={this.state.user.address_line1}
          />
          <FormControl.Feedback />
          <HelpBlock>Address Line 1 </HelpBlock>
          <FormControl
            type="text"
            value={this.state.user.address_line2}
          />
          <FormControl.Feedback />
          <HelpBlock>Address Line 2 </HelpBlock>
          <FormControl
            type="text"
            value={this.state.user.city}
          />
          <FormControl.Feedback />
          <HelpBlock>City </HelpBlock>
          <FormControl
            type="text"
            value={this.state.user.zipcode}
          />
          <FormControl.Feedback />
          <HelpBlock>Zip Code </HelpBlock>
          <FormControl
            type="text"
            value={this.state.user.state}
          />
          <FormControl.Feedback />
          <HelpBlock>State Code </HelpBlock>
          <FormControl
            type="text"
            value={this.state.user.phone_number}
          />
          <FormControl.Feedback />
          <HelpBlock>Phone Number</HelpBlock>
          <FormControl
            type="text"
            value={this.state.user.email}
          />
          <FormControl.Feedback />
          <HelpBlock>Email </HelpBlock>
        </FormGroup>
      </form>
    )

    const shipping = (
      <form className="col-md-4 col-md-offset-2">
        <FormGroup >
          <ControlLabel>Shipping Address </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.first_name}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>First Name </HelpBlock>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.last_name}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Last Name </HelpBlock>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.address_line1}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Address Line 1 </HelpBlock>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.address_line2}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Address Line 2 </HelpBlock>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.city}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>City </HelpBlock>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.zipcode}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Zip Code </HelpBlock>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.state}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>State Code </HelpBlock>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.phone_number}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Phone Number</HelpBlock>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.user.email}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Email </HelpBlock>
        </FormGroup>

        <Button bsStyle="primary" type="submit">
          Update Shipping Address
        </Button>
      </form>
    )

    return (
      <div className="container">
        {billing}
        {shipping}
      </div>
    )
  }
}
  export default Checkout
