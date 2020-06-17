import { combineReducers } from 'redux';
import { authReducer } from './Auth';
import profiles from './profile';
import { listMovies } from './movies';
import review from './review';

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profiles,
    get_movies: listMovies,
    add_review: review
})

export default rootReducers;