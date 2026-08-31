import React from "react";
import { useState } from "react";
import "./TodoForm.css";

function TodoForm({ onAdd }) {
	const [taskValue, setTaskValue] = useState("");

	function handleAdd(){
		if (taskValue.trim()==="") return ;
		onAdd(taskValue);
		setTaskValue("");
	}


	return (
		<>
			<div className="addTask">
				<input placeholder="Add Task" value={taskValue} 
					onChange={(e) => setTaskValue(e.target.value)} 
					onKeyDown={(e)=>{
						if (e.key==="Enter"){
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