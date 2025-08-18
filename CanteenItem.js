import React from 'react';

const CanteenItem = ({ name, price, category, available }) => (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
        <h3>{name}</h3>
        <p><strong>Price:</strong> ₹{price}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Available:</strong> {available}</p>
    </div>
);

export default CanteenItem;