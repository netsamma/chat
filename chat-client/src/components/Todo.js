import React from 'react'

function Todo(props) {

	return (
		<div>
			<h1>{props.todo.name}</h1>
			<button onClick={()=> props.addCart(props.index)}>Add</button>
		</div>
	)
}

export default Todo
