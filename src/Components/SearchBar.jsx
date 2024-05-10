import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        handleSearch(searchTerm);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Buscar...'
                value={searchTerm}
                onChange={handleChange}
            />
            <button type='submit'>Buscar</button>
        </form>
    );
};

export default SearchBar;
