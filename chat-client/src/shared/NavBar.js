import React, { Component } from 'react'
<<<<<<< HEAD
import { Link} from "react-router-dom";
import './NavBar.css'


=======
import {Link} from 'react-router-dom'
import './NavBar.css'

>>>>>>> bcc0dd19413792a8629c9f147b1e11d410deed1a
export class Navbar extends Component {
  render() {
	return (
    <nav className="navbar">
      <Link to="/" className="navbar-button">
<<<<<<< HEAD
        Login
      </Link>
      <Link to="/home" className="navbar-button">
=======
>>>>>>> bcc0dd19413792a8629c9f147b1e11d410deed1a
        Home
      </Link>
      <Link to="/who" className="navbar-button">
        Chi siamo
      </Link>
      <Link to="/chat" className="navbar-button">
        Chat
      </Link>
    </nav>
  );
  }
}

export default Navbar
