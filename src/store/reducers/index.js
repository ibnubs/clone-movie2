import { combineReducers } from 'redux';
import { authReducer } from './Auth';
import profiles from './profile';

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profiles
})

export default rootReducers;