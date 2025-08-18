import React from 'react';

const TempleList = () => {
    const temples = [
        {
            name: 'Tirupati Temple',
            location: 'Tirupati',
            deities: ['Venkateswara']
        },
        {
            name: 'Meenakshi Temple',
            location: 'Madurai',
            deities: ['Meenakshi', 'Shiva']
        },
        {
            name: 'Jagannath Temple',
            location: 'Puri',
            deities: ['Jagannath', 'Balabhadra', 'Subhadra']
        }
    ];

    return (
        <section style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h2>Temple List</h2>
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Temple Name</th>
                        <th>Location</th>
                        <th>Deities</th>
                    </tr>
                </thead>
                <tbody>
                    {temples.map((temple, index) => (
                        <tr key={index}>
                            <td>{temple.name}</td>
                            <td>{temple.location}</td>
                            <td>
                                <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                                    {temple.deities.map((deity, i) => (
                                        <li key={i}>{deity}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default TempleList;