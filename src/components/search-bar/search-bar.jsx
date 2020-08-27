import React from 'react';
import './search-bar.css';

const SearchBar = ({ placeholder, handleChange }) => (
    <input 
    className = 'search'
    type='search'
    placeholder = {placeholder}
    onChange={handleChange} />
)
export default SearchBar;