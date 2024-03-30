import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && quantity.trim() !== '') {
      setItemsList([...itemsList, { name, quantity }]);
      setName('');
      setQuantity('');
    }
  };

  return (
    <div>
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
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

