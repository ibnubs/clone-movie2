import { combineReducers } from 'redux';
<<<<<<< HEAD
import { authReducer } from './Auth';
import profiles from './profile';

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profiles
=======
import { authReducerRegis, authReducerLogin } from './Auth';
import {listMovies} from './movies';

const rootReducers = combineReducers({
    auth_regis: authReducerRegis,
    auth_login: authReducerLogin,
    get_movies: listMovies,
>>>>>>> 429ec7394c808673f6be28724cb42f8d6d818aaa
})

export default rootReducers;