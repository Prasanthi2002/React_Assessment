import React from 'react';
import ServiceCard from './ServiceCard';

const TailorShop = () => {
    const services = [
        {
            serviceName: 'Shirt',
            price: 20,
            fabricsAvailable: ['Cotton', 'Linen', 'Polyester']
        },
        {
            serviceName: 'Pants',
            price: 30,
            fabricsAvailable: ['Denim', 'Wool', 'Chino']
        },
        {
            serviceName: 'Lehenga',
            price: 150,
            fabricsAvailable: ['Silk', 'Georgette', 'Chiffon']
        },
        {
            serviceName: 'Blouse',
            price: 40,
            fabricsAvailable: ['Cotton', 'Silk', 'Satin']
        }
    ];

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Tailoring Services</h2>
            <div className="row">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        serviceName={service.serviceName}
                        price={service.price}
                        fabricsAvailable={service.fabricsAvailable}
                    />
                ))}
            </div>
        </div>
    );
};

export default TailorShop;