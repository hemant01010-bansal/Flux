import React, { useState } from "react";
import History from "../../components/History";

function HistoryLists(){
    const [completedTodos, setCompletedTodos] = useState(()=>JSON.parse(localStorage.getItem("completedTodos")) || [])

    return(
        <>
        {completedTodos.map((todo)=> {
            console.log("one completed task added");
            console.log(todo);
            return <History todo={todo} key={todo.id}></History>
        })}
        </>
    )
}

export default HistoryLists;