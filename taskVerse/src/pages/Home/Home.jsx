import React from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { useState,useEffect } from "react";

function Home(){
    const [todos, setTodos]=useState(()=>JSON.parse(localStorage.getItem('todos')) || [])

    useEffect(()=>{localStorage.setItem('todos',JSON.stringify(todos))},[todos])

    function addTodo(taskText){
         setTodos([...todos, { task: taskText, id: Date.now() }])
         console.log(Date.now().toLocaleString());
         
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