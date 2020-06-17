import axios from 'axios';

const baseUrl = "https://be-review-movie.herokuapp.com/api/v1/movie/"

const movieSearch= `${baseUrl}?search={genre}`
const detailMovie= `${baseUrl}detail/{id}`
const castMovie= `${baseUrl}detail/{id}/casts`


// export const fetchMovie = async () => {
//     try{
//         const {data} = await axios.get(baseUrl)
//         console.log( 'ini adalah data ',  data)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }


// export const getMovie = () => async () => {
//     try{
//         const result =  await axios.get(baseUrl);
//         console.log('data getmovie', result.data.data.Movie)
//         return {
//             type:'GET_MOVIES',
//             playload: result.data.data.Movie
//         }
//     } catch (error){
//         console.log('ini error dari getmovie', error)
//     }
// }

export const getMovie = () => async dispatch => {
    try{
        
        const result = await axios.get(baseUrl);
        console.log(result.data.data)
        dispatch({
            type:'GET_MOVIES',
            data:result.data.data
        })
    }
    catch (err) {
        console.log ('error dari getmovie', err)
    }
}
