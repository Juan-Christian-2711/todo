import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [priority, setpriority] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlepriorityChange = (e) => {
    setpriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && priority.trim() !== '') {
      setItemsList([...itemsList, { name, priority }]);
      setName('');
      setpriority('');
    }
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={handleNameChange}
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
            {item.name} - Priority: {item.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

