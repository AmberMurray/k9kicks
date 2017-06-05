import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {users: []}

  componentDidMount() {
    console.log('blah')
    fetch('/users')
      .then(res => {
        console.log('RES', res)
        return res.json()
      })
      .then(users => this.setState({ users }))
      .catch(err => {
        console.log("ERR", err)
      })

  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}
export default App;
