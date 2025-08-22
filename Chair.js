import React from 'react';

const Chair = ({ name, price, material, size, brand }) => (
  <div className="card mt-3">
    <div className="card-header bg-info text-white">
      <h5>Chair Details</h5>
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

export default Chair;