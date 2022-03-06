import React from "react";
import "./Header.css";

function Header(props){
	return (
		<header className="wrapper block center">
			<h2>Shopping cart</h2>	
			<div>
				<a href="#/cart">Carrello</a>
				<a href="#/signin">Sign in</a>
			</div>
		</header>
	);

}

export default Header;