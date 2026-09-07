import React from "react";
import './History.css'

function History({todo, onDelete}){
    return(
        <>
        <div className="Hparent">
            <div>
                {/* task */}
                <div className="Htask">{todo.task}</div>

                {/* time */}
                <div className="HtaskTime">
                    <div className="HtaskAdd">Task Add Time<p>{todo.id}</p></div>
                    <div className="HtaskDelete">Task Completed Time<p>{todo.completedTime}</p></div>
                </div>
            </div>

            <div className="Hdelte">
                <button onClick={()=>onDelete(todo,todo.id)}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default History;