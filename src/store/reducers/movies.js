import {GET_MOVIES} from '../actions/Types';
const initialState = {
    movies:[]
}

export const listMovies = (state=initialState, action) => {
    const {type, data} = action;
    switch (type){
        default:
            return {
                ...state
            }
        case 'GET_MOVIES':
            return {
                ...state,
                movies:data
            }
    }
}




// export const listMovies = (state=[], action) => {
//     if (action.type === 'GET_MOVIES'){
//         return action.data
//     }
//     return state
// }
