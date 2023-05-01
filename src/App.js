import React from 'react';
import SearchInput from './components/SearchInput';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';
import { AppContainer } from './App.styles';

const App = () => {
    return (
        <AppContainer>
            <SearchInput />
            <RepoList />
            <Pagination />
        </AppContainer>
    );
};

export default App;
