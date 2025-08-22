import React from 'react';

const FruitSender = ({ onSend }) => {
  return (
    <button onClick={onSend}>Send Fruit</button>
  );
};

export default FruitSender;