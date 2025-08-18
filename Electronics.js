import React, { useState } from 'react';

function ElectronicItemDetails() {
    const [name, setName] = useState('Smartphone');
    const [brand, setBrand] = useState('Samsung');
    const [price, setPrice] = useState(15000);

    const updateBrand = () => {
        setBrand('Apple');
    };

    const increasePrice = () => {
        setPrice(prevPrice => prevPrice + 5000);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <section style={{ padding: '1rem', fontFamily: 'Arial' }}>
            <h2>Electronic Item Details</h2>

            <label>
                <strong>Name:</strong>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    style={{ marginLeft: '0.5rem' }}
                />
            </label>

            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Price:</strong> ₹{price}</p>

            <button onClick={updateBrand} style={{ marginRight: '0.5rem' }}>
                Update Brand
            </button>
            <button onClick={increasePrice}>
                Increase Price
            </button>
        </section>
    );
}

export default ElectronicItemDetails;