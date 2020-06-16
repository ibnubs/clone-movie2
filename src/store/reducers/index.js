import { combineReducers } from 'redux';
import { authReducer } from './Auth';
import profiles from './profile';
import { listMovies } from './movies';

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profiles,
    get_movies: listMovies
})

export default rootReducers;