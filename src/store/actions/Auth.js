import {
    SUCCESS_SIGN_UP,
    FAILED_SIGN_UP,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    LOADING
} from "./Types";

import axios from "axios";

const baseUrl_regis = "https://be-review-movie.herokuapp.com/api/v1/user/register"
const baseUrl_login = "https://be-review-movie.herokuapp.com/api/v1/user/login"

export const SignUpAction = input => {
    return dispatch => {
        dispatch({ type: LOADING })

        axios.post(`${baseUrl_regis}`, input)

            .then(res => {
                console.log(res);
                dispatch({
                    type: SUCCESS_SIGN_UP,
                    payload: res.data.message //liat di redux-dev action : tree
                })
            })
            .catch(error => {
                console.log(error.response.data);
                dispatch({
                    type: FAILED_SIGN_UP,
                    payload: error.response.data.error
                });
            })
    }
}

export const login = data => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl_login}`, data)
        localStorage.setItem('token', res.data.data.token) //simpan token pke setItem
        console.log('login : ', res.data.status)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.message
        })
    }
    catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAILED,
            payload: error
        })
    }
}

//   export const ACTION_SIGN_IN = input => {
//     return dispatch => {
//       console.log("ACTION_SIGN_IN");
//       dispatch({ type: LOADING });
//       Axios.post(`${baseUrl}/auth`, input)
//         .then(res => {
//           console.log(res);
//           dispatch({
//             type: SIGN_IN,
//             payload: res.data.data
//           });
//           dispatch({ type: LOADING });
//         })
//         .catch(error => {
//           console.log(error);
//           dispatch({
//             type: ERROR_LOGIN,
//             payload: error
//           });
//           dispatch({ type: LOADING });
//         });
//     };
//   };

//   export const ACTION_SIGN_OUT = () => {
//     return {
//       type: SIGN_OUT
//     };
//   };

//   export const ACTION_UPDATE_PROFILE = input => dispatch => {
//     const local = JSON.parse(localStorage.getItem("userLocal"));
//     let setToken = {
//       headers: {
//         Authorization: local ? local.token : false
//       }
//     };
//     console.log("ACTION_UPDATE_PROFILE", setToken);
//     dispatch({ type: LOADING });
//     Axios.put(`${baseUrl}/users`, input, setToken)
//       .then(res => {
//         console.log(res);
//         dispatch({
//           type: UPDATE_PROFILE,
//           payload: res.data.data
//         });
//         dispatch({ type: LOADING });
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch({
//           type: ERROR_UPDATE,
//           payload: error
//         });
//         dispatch({ type: LOADING });
//       });
//   };

//   export const ACTION_CHANGE_AVATAR = inputFile => dispatch => {
//     const local = JSON.parse(localStorage.getItem("userLocal"));
//     let setToken = {
//       headers: {
//         Authorization: local ? local.token : false
//       }
//     };
//     console.log("ACTION_CHANGE_AVATAR", setToken);
//     const data = new FormData();
//     data.append("image", inputFile);
//     dispatch({ type: LOADING });
//     Axios.put(`${baseUrl}/users`, data, setToken)
//       .then(res => {
//         console.log(res);
//         dispatch({
//           type: CHANGE_AVATAR,
//           payload: res.data.data
//         });
//         dispatch({ type: LOADING });
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch({
//           type: ERROR_UPDATE,
//           payload: error
//         });
//         dispatch({ type: LOADING });
//       });
//   };
