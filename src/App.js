import "./styles.css"
import { useState } from "react"

export default function App(){
  const [newitem, setNewItem] = useState("")

  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
      </div>
      <button className="btn add-btn">ADD</button>
    </form>
    <h1 className="header">To-Do List</h1>
    <ol className="list">
      
    </ol>
    </>
  )
}

