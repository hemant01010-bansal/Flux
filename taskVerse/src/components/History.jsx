import React from "react";

function History({todo}){
    return(
        <>
        <div>
            <div>{todo.task}</div>
            <div>Task Add Time : {todo.id}</div>
            <div>Task Completed Time : {todo.completedTime}</div>
        </div>
        </>
    )
}

export default History;