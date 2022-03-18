import './Login.css'
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      username: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({islogged: !this.islogged })
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    if (this.state.islogged) {
      return (
        <Navigate to={`/chat/`} state={this.state.username}/>
      )
    }else{
      return (
        <div className="main">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input className='login-input' placeholder='Nome' onChange={this.handleChange.bind(this)}/>
            <button className='login-button'>Login</button>
          </form>
        </div>
      );
    }
  }
}

export default Login;