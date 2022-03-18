import React, { Component } from 'react'

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
