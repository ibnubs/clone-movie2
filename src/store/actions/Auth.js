import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILED } from './Types'; //pke {} krn di export satu-satu

const baseUrl = "https://be-mini-project.herokuapp.com/api/user/login"

export const login = data => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}`, data)
        localStorage.setItem('token', res.data.data.token) //simpan token pke setItem
        console.log('login', res)
        dispatch({
            type: LOGIN_SUCCESS
        })
    }
    catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAILED
        })
    }
}
