import React, { Component } from 'react';

class Car extends Component {
  render() {
    const { brand, model, color, year } = this.props;

    return (
      <div style={{ border: '2px solid #333', padding: '20px', width: '300px', margin: '20px auto', borderRadius: '8px' }}>
        <h2>Car Details 🚗</h2>
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Model:</strong> {model}</p>
        <p><strong>Color:</strong> {color}</p>
        <p><strong>Year:</strong> {year}</p>
      </div>
    );
  }
}

export default Car;