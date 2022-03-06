import React, {useState} from 'react'
import cssform from "./Form.module.css";

function Form() {
	const [name, setName] = useState("Ignazio");
	const [surname, setSurname] = useState("Sammarco");

	function handleNameChange(e){
		setName(e.target.value);
	}
	function handleSurnameChange(e){
		setSurname(e.target.value);
	}

	return (

		<div className={cssform.wrapper}>
			<div className="label"><span>Nome</span></div>
			<input 
				value={name}
				onChange={handleNameChange}
			/>
			<div className="label"><span>Cognome</span></div>
			<input 
				value={surname}
				onChange={handleSurnameChange}
			/>
		</div>

	)
}

export default Form
