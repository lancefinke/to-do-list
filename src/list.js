
import { TodoItem } from "./item"

export function TodoList({ todos, deleteTodo, toggleTodo }){
    return(
        <div className="list-box">
      <h1 className="header">To-Do List</h1>
      <ol className="list">
        {todos.map(todo => {
          return (
            <TodoItem 
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}/>
          )
        })}
      </ol>
    </div>
    )
}