import React, { useState } from 'react'
import Todo from './Todo';

function TodoList() {
	let [products, setProducts] = useState([
		{
		id: 'p01',
		name: 'Carciofi',
		price: 5,
		quantity: 6,
		status: true,
		photo: 'thumb1.gif'
		},
		{
		id: 'p02',
		name: 'Broccoli',
		price: 2,
		quantity: 3,
		status: false,
		photo: 'thumb2.gif'
		},
		{
		id: 'p03',
		name: 'Verza',
		price: 15,
		quantity: 16,
		status: true,
		photo: 'thumb3.gif'
		}
	]);

	const addCart = (index) => {
		console.log(index);
	}

	return (
		<div>
			{products.map((todo, index) => {
				return( 
					<Todo key={index} todo={todo} index={index} addCart = {addCart} />
				)
			})}
		</div>
	)
}

export default TodoList
