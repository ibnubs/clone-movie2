import { combineReducers } from 'redux';
import { authReducer } from './Auth';
import profiles from './profile';
import review from './review';

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profiles,
    add_review: review
})

export default rootReducers;