
import React from 'react';
import './App.css';
import {useState} from 'react';
function App() {

  const [todoTitle,settodoTitle]= useState("");
  const [todoList,settodoList]= useState([]);
  const [Iseditable,setIseditable]=useState(false);
  const [editableTodo ,seteditableTodo]=useState(null)

 

  const createHandlr = (event)=>{
    event.preventDefault();

    const newTodo ={
      id:Date.now(),
      title:todoTitle
    }


    settodoList([newTodo,...todoList])
    settodoTitle("")
  }
    const editHandlr=(id)=>{
      const Editedtodo=todoList.find (todo=> todo.id===id)
      setIseditable(true);
      seteditableTodo(Editedtodo);
      settodoTitle(Editedtodo.title)
    }
    const updateHandlr =(event)=>{
      event.preventDefault();
       editableTodo.title=todoTitle;
       settodoTitle("");
       setIseditable(false);
       seteditableTodo(null)


    }
    const deleteHandlr=(id)=>{
     const newTodolist= todoList.filter(todo =>todo.id!==id);
     settodoList(newTodolist)
    }
 
  return (
    <div className="App">
      <form>
        <input value={todoTitle} type="text" name="todoTitle" onChange={(event)=>settodoTitle(event.target.value)}/>
        <button onClick={(event)=>Iseditable===true?updateHandlr(event):createHandlr(event)}>
          {
            Iseditable===true?"Update todo":"Add todo"
          }
        </button>
      </form>
      <ul>
      {todoList.map(todo=> (
        <li>
          <span>
          {todo.title}
          </span>
        <button onClick={()=> editHandlr(todo.id)}>Edit</button>
        <button onClick={()=>deleteHandlr(todo.id)}>Delete</button>
        </li>
        
        ))}
      </ul>
    </div>
  );
}

export default App;
