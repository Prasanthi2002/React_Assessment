import React from 'react';
import CanteenItem from './CanteenItem';

const CanteenMenu = () => {
    const canteenName = "Campus Food Court";
    const location = "Block A, Ground Floor";
    const openHours = "8:00 AM – 8:00 PM";

    return (
        <section style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h1>{canteenName}</h1>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Open Hours:</strong> {openHours}</p>

            <h2>Menu</h2>
            <CanteenItem name="Idli" price={30} category="Breakfast" available="Yes" />
            <CanteenItem name="Dosa" price={5} category="Breakfast" available="Yes" />
            <CanteenItem name="Vada" price={2} category="Snack" available="No" />
            <CanteenItem name="Poori" price={40} category="Breakfast" available="Yes" />
            <CanteenItem name="Meals" price={120} category="Lunch" available="Yes" />
        </section>
    );
};

export default CanteenMenu;