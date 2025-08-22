// Example: Table.js
import React from 'react';

const Table = ({ name, price, material, size, brand }) => (
  <div className="card mt-3">
    <div className="card-header bg-warning text-white">
      <h5>Table Details</h5>
    </div>
    <div className="card-body">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Material:</strong> {material}</p>
      <p><strong>Size:</strong> {size}</p>
      <p><strong>Brand:</strong> {brand}</p>
    </div>
  </div>
);

export default Table;