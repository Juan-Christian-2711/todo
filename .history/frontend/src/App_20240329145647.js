import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

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
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={due}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="priority"
          value={priority}
          onChange={handleChange}
        />
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
