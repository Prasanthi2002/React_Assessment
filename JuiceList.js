import React from 'react';
import Juice from './Juice';

const JuiceList = () => {
    const juices = [
        { id: 1, name: 'Orange', price: 25 },
        { id: 2, name: 'Mango', price: 30 },
        { id: 3, name: 'Pineapple', price: 35 }
    ];

    return (
        <section style={{ padding: '2rem' }}>
            <h2>Juice Menu</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {juices.map(juice => (
                        <Juice key={juice.id} {...juice} />
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default JuiceList;