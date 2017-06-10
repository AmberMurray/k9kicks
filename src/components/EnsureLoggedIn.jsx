import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class EnsureLoggedIn extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL } = this.props

    if (!this.props.isLoggedIn) {
      browserHistory.replace("/login")
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}

export default EnsureLoggedIn
