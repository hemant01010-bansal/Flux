import React from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { useState,useEffect } from "react";

function Home(){
    const [todos, setTodos]=useState(()=>JSON.parse(localStorage.getItem('todos')) || [])
    const [completedTodos, setCompletedTodos]=useState(()=>JSON.parse(localStorage.getItem("completedTodos")) || [])
    //we take array of todo object in local variable 'todos' 

    useEffect(()=>{localStorage.setItem('todos',JSON.stringify(todos))},[todos])
    useEffect(()=>{localStorage.setItem('completedTodos',JSON.stringify(completedTodos))}, [completedTodos])
    //most important line in this whole page
    //this line update 'todos' in local storage when we make any update in 'todos' array , this is function which only runs when our 'todos' is changed


    //When any of these 3 funcs run then they update the state of 'todos' (local var) and when 'todos' state is changed then we update it in local storage 


    function addTodo(taskText){
        let currTime=new Date().toLocaleString();
        setTodos([...todos, {task: taskText, id: currTime, completedTime: null}])
    }

    function deleteTodo(idToRemove) {
        setTodos(todos.filter((todo) => todo.id !== idToRemove));
    }

    function editTodo(idToEdit, newTaskText) {
        setTodos(
            todos.map((todo) =>
                todo.id === idToEdit ? { ...todo, task: newTaskText } : todo
            )
        );
    }

    function completeTodo(todo, idToRemove){
        let currTime=new Date().toLocaleString()
        todo.completedTime=currTime;
        setCompletedTodos([...completedTodos, todo])
        setTodos(
            todos.filter((todo) => todo.id!=idToRemove)
        )
        alert("🎉One Task is completed!");
    }


    return (
        <>
        <TodoForm onAdd={addTodo}/>

        {todos.length!=0 ? 
            //show tasks
            todos.map((todo)=> <TodoList key={todo.id} todo={todo} onDelete={deleteTodo} onEdit={editTodo} onComplete={completeTodo}></TodoList>)

            : 

            (   //show a message if user has no task
                <div style={{ textAlign: "center", marginTop: "60px", marginBottom: "100px", color: "#aeb9d4"}}>
                    <h2 style={{ color: "white", margin: "10px 0" }}>
                        You're all caught up!
                    </h2>
                    <p>No tasks for now. Add one above when you're ready.</p>
                </div>
            )
        }

        {/* {todos.map((todo)=> <TodoList key={todo.id} todo={todo} onDelete={deleteTodo} onEdit={editTodo} onComplete={completeTodo}></TodoList>)} */}
        </>
    )
}

export default Home;