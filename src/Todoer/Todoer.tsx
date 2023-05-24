import React from 'react';
import './Todoer.css'
import TodoItem from './TodoItem';

let todoInit = [
    "abc",
    "def",
    "gkl"
];

function TodoList(props:any) {
    const fruitListItems = props.todos.map((todo:any, i:number) => (
      <TodoItem i={i} text={todo}/>
    ));
    return <ul>{fruitListItems}</ul>;
  }


export default function Todoer(){
    const [todos, setTodos] = React.useState(todoInit);
    const [newTodo, setNewTodo ] = React.useState("");

    function AddTodo(){
        setTodos(
            (prevTodos) => {
                // prevTodos.push("abc");
                console.debug(todos);
                return [...prevTodos, newTodo];}
            );
        }

    function ClearTodo(){
        setTodos([]);
        console.debug(todos);
    }

    return <div>
        <p>Todoer</p>
        <input type='text' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}></input>
        <TodoList todos={todos}></TodoList>
        <a className='btnAdd' onClick={AddTodo}>Add</a>
        <a id="btnClear" onClick={ClearTodo}>Clear</a>
    </div>
}