export function TodoItem({ completed, id, title, deleteTodo, toggleTodo}){
    return (
         <li> 
            <label>
              <input type="checkbox" checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}/>
              {title}
            </label>
            <button className="btn btn-delete" onClick={() => deleteTodo(id)}>Delete</button>
          </li>
    )

}