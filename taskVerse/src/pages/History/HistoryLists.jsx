import React, { useState } from "react";
import History from "../../components/History";

function HistoryLists(){
    const [completedTodos, setCompletedTodos] = useState(()=>JSON.parse(localStorage.getItem("completedTodos")) || [])

    function deleteCompletedTodo(todo,idToRemove){
        setCompletedTodos(completedTodos.filter((todo)=> todo.id!=idToRemove))
    }

    return(
        <>
        <div style={{padding: '30px 20px 30px 20px'}}>
            {completedTodos.map((todo)=> <History todo={todo} onDelete={deleteCompletedTodo} key={todo.id}></History>)}
        </div>
        </>
    )
}

export default HistoryLists;