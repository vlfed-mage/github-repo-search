import { combineReducers } from 'redux';
import repositoriesReducer from './repositories/repositoriesSlice';

const rootReducer = combineReducers({
    repositories: repositoriesReducer,
});

export default rootReducer;
