import React from 'react';

const FruitSelector = ({ fruits, onSelect }) => {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>
          {fruit}
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => onSelect(fruit)}
          >
            Select
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FruitSelector;