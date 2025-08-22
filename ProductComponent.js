import React from 'react';

const ProductComponent = ({ product }) => {
  const {
    name,
    brand,
    price,
    category,
    warranty,
    availability
  } = product;

  return (
    <div>
      <h2>Electronic Product Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Type:</strong> {price > 50000 ? 'Premium Product' : 'Budget Product'}</p>
      <p><strong>{warranty > 0 ? `Warranty: ${warranty} years` : 'No Warranty'}</strong></p>
      <p>{availability ? '✅ In Stock' : '❌ Out of Stock'}</p>
      <p>{category === 'Laptop' ? '🎁 Free Laptop Bag Offer' : null}</p>
    </div>
  );
};

export default ProductComponent;