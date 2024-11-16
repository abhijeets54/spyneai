import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCars = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/cars', { headers: { Authorization: `Bearer ${token}` } });
            setCars(response.data);
        };
        fetchCars();
    }, []);

    const filteredCars = cars.filter(car =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <h1>Your Cars</h1>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <ul>
                {filteredCars.map(car => (
                    <li key={car._id}>
                        <a href={`/products/${car._id}`}>{car.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;