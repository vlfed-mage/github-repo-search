import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setCurrentPage, fetchRepositories } from '../../redux/repositories/repositoriesSlice';
import { SearchInputContainer, Input } from './SearchInput.styles';

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            const searchQuery = inputValue || 'react';
            dispatch(setSearchQuery(searchQuery));
            dispatch(setCurrentPage(1));
            dispatch(fetchRepositories(searchQuery));
        }, 500); // Затримка в 500 мс

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [dispatch, inputValue]);

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    return (
        <SearchInputContainer>
            <Input type='text' placeholder='Search' value={inputValue} onChange={handleInputChange} />
        </SearchInputContainer>
    );
};

export default SearchInput;
