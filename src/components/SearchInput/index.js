import React from 'react';
import { SearchInputContainer, Input } from './SearchInput.styles';

const SearchInput = ({ setSearchQuery, setCurrentPage }) => {
    const handleInputChange = ({ target }) => {
        setSearchQuery(target.value || 'react');
        setCurrentPage(1);
    };

    return (
        <SearchInputContainer>
            <Input type='text' placeholder='Search' onChange={handleInputChange} />
        </SearchInputContainer>
    );
};

export default SearchInput;