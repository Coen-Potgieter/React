// Import useRef
import { useState, useRef } from "react";

export default function Player() {
	// Declare useRef variable to be handled by React
	const nameInput = useRef();
	const [ currName, setName ] = useState("unknown entity");
	
	function handleClick() {
		// Set `currName` to current what is currently in the `value`  field of our `<input>` element using `nameInput`
		setName(nameInput.current.value);
		// Reset the `value` field
		nameInput.current.value = "";
	}
		
	return (
		<section id="player">
			<h2>Welcome {currName}</h2>
			<p>
				<input 
					ref={nameInput}
					type="text"
				/>
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
