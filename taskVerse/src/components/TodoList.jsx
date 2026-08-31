import React from "react";
import './TodoList.css'
import { useState } from "react";

function TodoList({todo, onDelete, onEdit}){
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.task);

    function handleEditClick() {
        if (isEditing) {
            onEdit(todo.id, editValue);
        }
        setIsEditing(!isEditing);
    }

    return(
        <>
        <div className="task">
            {isEditing ? (
                <input
                    className="taskValue"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                />
            ) : (
                <div className="taskValue">{todo.task}</div>
            )}
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