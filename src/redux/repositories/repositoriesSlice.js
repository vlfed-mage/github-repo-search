import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    repositories: null,
    totalPages: 0,
    status: 'loading',
    error: null,
};

export const fetchRepositories = createAsyncThunk(
    'repositories/fetchRepositories',
    async ({ searchQuery, page }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://api.github.com/search/repositories?q=${searchQuery}&per_page=3&page=${page}`,
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    },
);

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
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

export default repositoriesSlice.reducer;
