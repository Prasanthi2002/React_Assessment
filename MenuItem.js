import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        const { name, price, category, available } = this.props;

        return (
            <div style={{
                border: '1px solid #ccc',
                padding: '1rem',
                marginBottom: '1rem',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9'
            }}>
                <h3>{name}</h3>
                <p><strong>Price:</strong> ₹{price}</p>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Available:</strong> {available}</p>
            </div>
        );
    }
}

export default MenuItem;