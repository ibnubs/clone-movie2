import {
    SUCCESS_SIGN_UP,
    FAILED_SIGN_UP,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} from "../actions/Types";


const initialState = {
    token: localStorage.getItem('token')
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return {
                ...state
            }

        case SUCCESS_SIGN_UP:
            alert(action.payload);
            return true; //liat dr redux-dev bagian state : authregis


        case FAILED_SIGN_UP:
            alert(action.payload);
            return false;

        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticate: true,
                token: action.payload
            }
        case LOGIN_FAILED:
            alert(action.payload)
            return {
                ...state,
                isAuthenticate: false,
                token: localStorage.removeItem('token') //menghapus token jika gagal
            }
        case LOGOUT:
            alert("Are you sure ?")
            return {
                ...state,
                isAuthenticate: false,
                token: localStorage.removeItem('token')
            }

    }

}

