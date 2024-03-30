import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, description, due, priority] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      setTodos([...todos, title, description, due, priority,]);
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
        />
        <input
          type="text"
          placeholder="Description"
        />
        <input
          type="number"
          placeholder="priority"
          max={5}
        />
        <input
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
