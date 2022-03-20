// import Auth from '../shared/Auth'
import './LoginView.css'

import React, { Component } from 'react'

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" }
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='Nome' onChange={this.handleChange.bind(this)}></input>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginView;