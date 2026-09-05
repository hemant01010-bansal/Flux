import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./TodoForm.css";

function TodoForm({ onAdd }) {
	const [taskValue, setTaskValue] = useState("");
	const inputRef = useRef(null);

	function handleAdd() {
		if (taskValue.trim() === "") return;
		onAdd(taskValue);
		setTaskValue("");
	}


	// window.addEventListener("keydown", (e) => {
	// 	if (e.key == "/") {
	// 		if (taskValue) {
	// 			setTaskValue((prev) => prev + '/');
	// 		}
	// 		else {
	// 			e.preventDefault(); //.preventDefault() tells the browser that don't do your built in automatic behaviour for this event let i will handle it
	// 			inputRef.current.focus();
	// 		}
	// 	}
	// })

	//this code has a issue that is when every time compenent re render then this eventlistener adds 
	//suppose 20 times re renders happens & then we press '/' then 20 / print because there are 20 event listener & each eventlistener see that slash press


	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			if (e.key == "/") {
				e.preventDefault();
				if (taskValue) {
					setTaskValue((prev) => prev + '/');
				}
				else {
					// e.preventDefault(); //.preventDefault() tells the browser that don't do your built in automatic behaviour for this event let i will handle it
					inputRef.current.focus();
					console.log("focused");
				}
			}
		})
	}, []) //this empty dependency array, means nothing to compare to find is anyting change if yes then func inside useEffect runs . Now this empty array means the effect runs only once, it will not run again on re renders

	// useEffect(() => { console.log("runs after every render") })

	return (
		<>
			<div className="addTask">
				<input placeholder="Add Task" value={taskValue}
					ref={inputRef}
					onChange={(e) => setTaskValue(e.target.value)} //every time when we press a key then the compenent 'TodoForm' re renders 
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleAdd()
						}
					}}
				/>
				<button onClick={handleAdd}>Add</button>
			</div>
		</>
	)
}

export default TodoForm;