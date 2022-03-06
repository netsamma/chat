import React from 'react'
import { useState, useEffect } from 'react';

function ClockFunc() {
	const [clock, setClock] = useState("");
	
	useEffect(() => {
		setInterval(() => {
		setClock(clock => new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	return (
		<div>
			<h1>Good morning!</h1>
      		<h2>Sono le {clock}</h2>
		</div>
	)
}

export default ClockFunc

// https://sebhastian.com/setinterval-react/
// https://www.youtube.com/watch?v=Dorf8i6lCuk
// minuto 3:09:00