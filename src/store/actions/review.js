import axios from 'axios';

const baseUrl_addreview = "https://be-review-movie.herokuapp.com/api/v1/movie/detail/324668/reviews/create"

export const addReview = () => async dispatch => {
    let token = localStorage.getItem('token')
    try {
        const res = await axios.post(`${baseUrl_addreview}`, {
            headers: {
                authorization: token
            }
        })
        dispatch({
            type: "ADD_REVIEW",
            payload: res.data.data.message
        })
    } catch (error) {
        console.log(error)
    }
    // .then(res => {
    //     this.setState({ loading: false })
    //     if (res.data.status) {
    //         Swal.fire({
    //             icon: 'success',
    //             text: 'task berhasil ditambahkan!'
    //         })
    //     }
    // })
    // .catch(err => {
    //     this.setState({ loading: false })

    //     Swal.fire({
    //         icon: 'error',
    //         text: err.response.message
    //     })
    // })
}

// export const delTodo = id => async dispatch => {
//     try {
//         await axios.delete(`${baseUrlDelete}${id}`, {
//             headers: {
//                 authorization: token
//             }
//         })
//         dispatch({
//             type: "DEL_TODOS",
//             payload: id
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }