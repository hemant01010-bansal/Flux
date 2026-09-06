import React from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { useState,useEffect } from "react";

function Home(){
    const [todos, setTodos]=useState(()=>JSON.parse(localStorage.getItem('todos')) || [])
    //we take array of todo object in local variable 'todos' 

    useEffect(()=>{localStorage.setItem('todos',JSON.stringify(todos))},[todos])
    //most important line in this whole page
    //this line update 'todos' in local storage when we make any update in 'todos' array , this is function which only runs when our 'todos' is changed


    //When any of these 3 funcs run then they update the state of 'todos' (local var) and when 'todos' state is changed then we update it in local storage 


    function addTodo(taskText){
        let currTime=new Date().toLocaleString('en-US',{
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        console.log(currTime);
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


    return (
        <>
        <TodoForm onAdd={addTodo}/>
        {todos.map((todo)=> <TodoList key={todo.id} todo={todo} onDelete={deleteTodo} onEdit={editTodo}></TodoList>)}
        </>
    )
}

export default Home;