import React from "react";
import './TodoList.css'
import { useState } from "react";

function TodoList({todo, onDelete, onEdit, onComplete}){
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.task);

    function handleEditClick() {
        if (isEditing) {
            if (editValue==""){
                alert("Task Can't be Empty!");
                return;
            }
            onEdit(todo.id, editValue);
        }
        setIsEditing(!isEditing);
    }

    return(
        <>
        <div className="task">
            <div className="isCompleteTaskTime">
                {/* checkbox to ask is task completed or not */}
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    {/* when we use curly braces then we tell react to come out of html and enter to js and yellow curly braces is object which contains key value pair of css which is converted into css */}
                    <input type="checkbox" className="isCompleted" onClick={() => onComplete(todo,todo.id)}/>
                </div>

                <div>
                    {/* ternary operator */}
                    {/* show input field if user is editing task otherwise show task value */}
                    {isEditing ?  ( <input className="editTask" value={editValue} onChange={(e) => setEditValue(e.target.value)} 
                    onKeyDown={(e)=>{
                        if (e.key==="Enter"){
                            handleEditClick();
                        }
                    }} 
                    /> ) : 
                        ( <div className="taskValue">
                            <p>{todo.task}</p>
                        </div> )}

                    {/* show date and time when task is added */}
                    <p className="time_date">{todo.id}</p>
                </div>
            </div>

            <div className="buttons">
                <button onClick={handleEditClick}>
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default TodoList