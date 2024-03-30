import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [itemsList, setItemsList] = useState([]);
  const handleTitleChange = (e) => {
    setTitle(e.targetsetPriority;

  const handlepriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && priority.trim() !== '') {
      setItemsList([...itemsList, { title, priority }]);
      setTitle('');
      setPriority('');
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
          placeholder="priority"
          value={priority}
          onChange={handlepriorityChange}
          max="5"
          min="1"
        />
        <input type="submit" />
      </form>
      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>
            {item.title} - Priority: {item.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
