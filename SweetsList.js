// src/SweetsList.js
import React from 'react';

function SweetsList() {
  const sweets = [
    { id: 1, name: 'Laddu', price: 30 },
    { id: 2, name: 'Jalebi', price: 25 },
    { id: 3, name: 'Barfi', price: 40 },
    { id: 4, name: 'Rasgulla', price: 35 },
    { id: 5, name: 'Kaju Katli', price: 50 }
  ];

  return (
    <div>
      <h2>🍬 Sweets List</h2>
      {sweets.map(sweet => (
        <div key={sweet.id}>
          {sweet.name} - Price: ₹{sweet.price}
        </div>
      ))}
    </div>
  );
}

export default SweetsList;