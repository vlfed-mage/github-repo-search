import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    repositories: null,
    currentPage: 1,
    totalPages: 0,
    searchQuery: 'react',
    status: 'loading',
    error: null,
};

export const fetchRepositories = createAsyncThunk(
    'repositories/fetchRepositories',
    async (query, { getState, rejectWithValue }) => {
        const { currentPage } = getState().repositories;
        try {
            const response = await axios.get(
                `https://api.github.com/search/repositories?q=${query}&per_page=3&page=${currentPage}`
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchRepositories.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.repositories = action.payload.items;
                state.totalPages = Math.ceil(20 / 3);
            })
            .addCase(fetchRepositories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCurrentPage, setSearchQuery } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
