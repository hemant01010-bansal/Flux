import React, { useEffect, useState } from "react";
import History from "../../components/History";

function HistoryLists(){
    const [completedTodos, setCompletedTodos] = useState(()=>JSON.parse(localStorage.getItem("completedTodos")) || [])

    useEffect(()=> localStorage.setItem("completedTodos",JSON.stringify(completedTodos)))

    function deleteCompletedTodo(todo,idToRemove){
        setCompletedTodos(completedTodos.filter((todo)=> todo.id!=idToRemove))
    }

    return(
        <>
        <div style={{padding: '30px 20px 30px 20px'}}>
            {/* {completedTodos.map((todo)=> <History todo={todo} onDelete={deleteCompletedTodo} key={todo.id}></History>)} */}
            {completedTodos.length!=0 ? completedTodos.map((todo)=> <History todo={todo} onDelete=            {deleteCompletedTodo} key={todo.id}></History>) : (<div
        style={{
            textAlign: "center",
            marginTop: "80px",
            padding: "40px",
            color: "#aeb9d4"
        }}
    >
        <div
            style={{
                fontSize: "55px",
                marginBottom: "15px"
            }}
        >
            📋
        </div>

        <h2
            style={{
                color: "white",
                fontSize: "28px",
                margin: "10px 0"
            }}
        >
            No completed tasks yet
        </h2>

        <p
            style={{
                fontSize: "17px",
                margin: "0 auto",
                maxWidth: "500px",
                lineHeight: "1.6"
            }}
        >
            Complete a task and it will appear here in your history.
            Keep going — you've got this! ✨
        </p>
    </div>)}
        </div>
        </>
    )
}

export default HistoryLists;    