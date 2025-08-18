import React, { useState } from 'react';

const Phone = () => {
  const [phone, setPhone] = useState({
    brand: 'Samsung',
    model: 'Galaxy S23',
    price: 79999
  });

  const updatePrice = () => {
    setPhone(prevPhone => ({
      ...prevPhone,
      price: prevPhone.price + 5000 // Increase price by ₹5000
    }));
  };

  return (
    <div style={{ border: '2px solid #444', padding: '20px', width: '300px', margin: '20px auto', borderRadius: '8px' }}>
      <h2>📱 Phone Details</h2>
      <p><strong>Brand:</strong> {phone.brand}</p>
      <p><strong>Model:</strong> {phone.model}</p>
      <p><strong>Price:</strong> ₹{phone.price}</p>
      <button onClick={updatePrice}>Update Price</button>
    </div>
  );
};

export default Phone;