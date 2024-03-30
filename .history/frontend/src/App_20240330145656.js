import React, { useState } from 'react';

function App() {
  const [title, settitle] = useState('');
  const [priority, setpriority] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handletitleChange = (e) => {
    settitle(e.target.value);
  };

  const handlepriorityChange = (e) => {
    setpriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && priority.trim() !== '') {
      setItemsList([...itemsList, { title, priority }]);
      settitle('');
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
          value={title}
          onChange={handletitleChange}
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

