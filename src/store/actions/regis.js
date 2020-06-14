import axios from 'axios';


const baseUrl = "https://be-review-movie.herokuapp.com/api/v1/user/register"

let token = localStorage.getItem('token')

export const register = (props) => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}`, {
            headers: {
                authorization: token
            }
        })
        console.log('login : ', res.data.data.message)
        dispatch({
            type: "SUCCESS_REGIS",
            payload: this.props.history.replace("/profile")
        })
    }
    catch (error) {
        console.log(error)
        dispatch({
            type: "FAILED_REGIS"
        })
    }
}