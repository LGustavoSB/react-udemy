import './styles.css';
import React from 'react';
import P from 'prop-types';

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            placeholder="Search something"
            className="text-input"
            onChange={handleChange}
            value={searchValue}
            type="search"
        />
    );
};

TextInput.propTypes = {
    searchValue: P.string.isRequired,
    handleChange: P.func.isRequired,
};
