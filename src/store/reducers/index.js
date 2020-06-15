import { combineReducers } from 'redux';
import { authReducerRegis, authReducerLogin } from './Auth';
import {listMovies} from './movies';

const rootReducers = combineReducers({
    auth_regis: authReducerRegis,
    auth_login: authReducerLogin,
    get_movies: listMovies,
})

export default rootReducers;