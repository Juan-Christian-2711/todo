import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [itemsList, setItemsList] = useState([]);
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate]
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && quantity.trim() !== '') {
      setItemsList([...itemsList, { title, quantity }]);
      setTitle('');
      setQuantity('');
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
          value={quantity}
          onChange={handleQuantityChange}
          max="5"
          min="1"
        />
        <input type="submit" />
      </form>
      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>
            {item.title} - Priority: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
