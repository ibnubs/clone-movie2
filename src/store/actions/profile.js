import axios from 'axios';

const baseUrl_profile = "https://be-review-movie.herokuapp.com/api/v1/profile"

let token = localStorage.getItem('token')

export const getProfile = () => async dispatch => {
    try {
        const res = await axios.get(`${baseUrl_profile}`, {
            headers: {
                authorization: token
            }
        })
        dispatch({
            type: "Get_Profile",
            payload: res.data.data.Profile.name
        })
    }
    catch (error) {
        console.log(error)
    }
}