import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRepositories } from './redux/repositories/repositoriesSlice';
import Pagination from './components/Pagination';
import SearchInput from './components/SearchInput';
import RepoList from './components/RepoList';
import { AppContainer } from './App.styles';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('react');
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const updateResults = async () => {
            await dispatch(fetchRepositories({ searchQuery, page: currentPage }));
        };

        const debounceTimeout = setTimeout(updateResults, 500);
        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [searchQuery, currentPage, dispatch]);

    return (
        <AppContainer>
            <SearchInput setSearchQuery={setSearchQuery} setCurrentPage={setCurrentPage} />
            <RepoList />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </AppContainer>
    );
};

export default App;
