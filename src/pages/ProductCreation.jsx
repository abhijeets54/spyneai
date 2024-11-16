import React, { useState } from 'react';
import axios from 'axios';

const ProductCreation = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        Array.from(images).forEach(image => {
            formData.append('images', image);
        });
        
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tags', tags);

        await axios.post('/api/cars', formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        
        alert("Car created successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required></textarea>
            <input type="text" placeholder="Tags (comma separated)" onChange={(e) => setTags(e.target.value)} required />
            <input type="file" multiple onChange={handleImageChange} required />
            <button type="submit">Create Car</button>
        </form>
    );
};

export default ProductCreation;