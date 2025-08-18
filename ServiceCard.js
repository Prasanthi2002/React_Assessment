import React from 'react';

const ServiceCard = ({ serviceName, price, fabricsAvailable }) => (
    <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{serviceName}</h5>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Fabrics:</strong></p>
                <ul>
                    {fabricsAvailable.map((fabric, index) => (
                        <li key={index}>{fabric}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default ServiceCard;