import React, { useState } from 'react';
import TodoItem from './TodoListItem';

function App() {
  const [todo, setTodo] = useState(new TodoItem());
  const [itemsList, setItemsList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim() !== '' && todo.priority.trim() !== '') {
      setItemsList([...itemsList, todo]);
      setTodo(new TodoItem());
    }
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={todo.title}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="priority"
          placeholder="Priority"
          value={todo.priority}
          onChange={handleInputChange}
          max="5"
          min="1"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={todo.description}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dueDate"
          placeholder="Due Date"
          value={todo.dueDate}
          onChange={h}
        />
        <input type="submit" />
      </form>
      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> - Priority: {item.priority}, Description: {item.description}, Due Date: {item.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
