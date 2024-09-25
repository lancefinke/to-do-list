import { NewTodoForm } from "./form"
import "./styles.css"
import { useState } from "react"

export default function App(){
  const [todos, setTodos] = useState([])

  function addTodo(title){
    setTodos((currentTodos) => {
      return [...currentTodos,
        {
          id: crypto.randomUUID(), title, completed: false
        },
      ]
    })
  }


  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <div className="list-box">
      <h1 className="header">To-Do List</h1>
      <ol className="list">
        {todos.map(todo => {
          return <li key={todo.id}> 
            <label>
              <input type="checkbox" checked={todo.checked}
              onChange={e => toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button className="btn btn-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        })}
      </ol>
    </div>
    </>
  )
}

