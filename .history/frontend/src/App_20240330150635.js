import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && priority.trim() !== '') {
      setItemsList([...itemsList, { title, priority, description, dueDate }]);
      setTitle('');
      setPriority('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="number"
          placeholder="Priority"
          value={priority}
          onChange={handlePriorityChange}
          max="5"
          min="1"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={handleDueDateChange}
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
