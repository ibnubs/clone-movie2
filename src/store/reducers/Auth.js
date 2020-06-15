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

export const authReducerRegis = (state = initialState, action) => {

    switch (action.type) {
        default:
            return {
                ...state
            }

        case SUCCESS_SIGN_UP:
            alert(action.payload);
            return true; //liat dr redux-dev bagian state : authregis


        case FAILED_SIGN_UP:
            localStorage.clear();
            alert(action.payload);
            return false;

        //   case SIGN_IN:
        //     localStorage.setItem("userLocal", JSON.stringify(action.payload));
        //     return action.payload;


        //   case UPDATE_PROFILE:
        //     localStorage.setItem("userLocal", [
        //       JSON.stringify({ ...state, fullname: action.payload.fullname })
        //     ]);
        //     console.log(state, action.payload);
        //     alert("Data successfully updated");
        //     return action.payload;

        //   case CHANGE_AVATAR:
        //     localStorage.setItem(
        //       "userLocal",
        //       JSON.stringify({ ...state, image: action.payload.image })
        //     );
        //     alert("Data successfully updated");
        //     return action.payload;

    }

}

export const authReducerLogin = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        default:
            return {
                ...state
            }
        case LOGIN_SUCCESS:
            alert(action.payload)
            return {
                ...state,
                isAuthenticate: true
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
