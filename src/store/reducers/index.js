import { combineReducers } from 'redux';
import { authReducerRegis, authReducerLogin } from './Auth';

const rootReducers = combineReducers({
    auth_regis: authReducerRegis,
    auth_login: authReducerLogin
})

export default rootReducers;