import React from 'react'
import { Link } from 'react-router-dom'

const users = [
	{id: 1, name:"Ignazio", surname:"Sammarco", username:"netsam", password:"demo" },
	{id: 2, name:"Marco", surname:"Rossi", username:"marcros", password:"demo" },
	{id: 3, name:"Andrea", surname:"Verdi", username:"andres", password:"demo" },
	{id: 4, name:"Gianni", surname:"Bianchi", username:"gianbi", password:"demo" },
]

function Users() {
	return (
		<ul>
			{users.map((user, key) =>
   				<li key={key}><Link to="/">{user.name}</Link></li>
  			)}
		</ul>
	)
}

export default Users

