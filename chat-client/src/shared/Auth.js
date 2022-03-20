import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './Chat'

export default class Auth extends Component {
	constructor(){
		this.auhenticate = false;
	}
	
	login(){
		this.auhenticate = true;
	}

	isAuthenticated(){
		return this.auhenticate;
	}

	render() {
		return (
			true
		);
  	}
}
