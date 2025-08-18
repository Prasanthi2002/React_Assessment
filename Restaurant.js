import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Restaurant extends Component {
    render() {
        const restaurantName = "Spice Villa";
        const location = "Main Street, Guntakal";
        const openHours = "10:00 AM – 10:00 PM";

        return (
            <section style={{ padding: '2rem', fontFamily: 'Arial' }}>
                <h1>{restaurantName}</h1>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Open Hours:</strong> {openHours}</p>

                <h2>Menu</h2>
                {/* ✅ Pass props correctly */}
                <MenuItem name="Biryani" price={150} category="Lunch" available="Yes" />
                <MenuItem name="Dosa" price={40} category="Breakfast" available="Yes" />
                <MenuItem name="Ice Cream" price={60} category="Snack" available="No" />
            </section>
        );
    }
}

export default Restaurant;