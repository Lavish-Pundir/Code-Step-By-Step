import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [todo, setTodo] = useState('')

  // GET API (Fetch Data)

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((result) => result.json())
      .then((resp) => {
        setData(resp.todos)
      })
  }, [])

  // POST API (Add Data)

  const addTodo = async () => {
    if (!todo) return;

    const response = await fetch('https://dummyjson.com/todos/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        todo: todo,
        completed: false,
        userId: 1
      })
    });

    const result = await response.json();

    setData([result, ...data])
    setTodo('')
  }

  return (
    <>
      <h1>API Fetching + POST</h1>

      {/* <input 
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder='Enter Todo'
      />
      <button onClick={addTodo}>Add Todo</button> */}

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo"      //  add post frontend code
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button onClick={addTodo} style={{ padding: "8px 15px" }}>
          Add Todo
        </button>
      </div>

      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Todo</td>
            <td>Completed</td>
            <td>User ID</td>
          </tr>
        </thead>

        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.todo}</td>
                <td>{item.completed ? "Yes" : "No"}</td>
                <td>{item.userId}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App