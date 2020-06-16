import axios from 'axios';

const apiKey = "43ccf5a224996692cdc24ac6ab9eb964";
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
// const topRatedUrl=`${url}/movie/top_rated`;
const movieUrl=`${url}/movie`;
const genreUrl=`${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie/`;
// const personUrl = `${url}/trending/person/week`;


export const fetchMovie = async () => {
    try{
        const {data} = await axios.get(nowPlayingUrl, {
            params:{
                api_key:apiKey,
                language: 'en-US',
                page:1
            }
        })
        // console.log('hasil fecthMovie', data)
        const posterUrl = 'http://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m)=>({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    }
    catch (error){
        // console.log(error, 'error from fecthMovie')
    }
}
export const fetchGenre = async () => {
    try{
        const {data} = await axios.get(genreUrl, {
            params:{
                api_key:apiKey,
                language: 'en-US',
                page:1
            }
        })
        // console.log('hasil fetchgenre', data);
        const modifiedData = data['genres'].map((g)=> ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    }
    catch (error){
        // console.log(error, 'error from fecthGenre')
    }
}
export const fetchMovieByGenre = async (genre_id) => {
    try{
        const {data} = await axios.get (moviesUrl, {
            params:{
                api_key:apiKey,
                language: 'en-US',
                page:1,
                with_genres: genre_id
            }
        })
        // console.log('hasil fetchmovie by genre', data);
        const posterUrl = 'http://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m)=>({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;

    }
    catch (error){
        // console.log(error, 'error from fetchmoviebygenre')
    }
}
// export const fetchPerson = () => {
    
// }
// export const fetchTopRatedMovie = () => {
    
// }

export const fetchMovieDetail = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}`,{
            params:{
                api_key: apiKey,
                language: 'en-US'
            }
        });
        console.log(data, 'ini data dari fetch movie detail')
        return data
    } catch (error) {
        // console.log(error, 'error dari fetch movie detail')
    }
}
export const fetchMovieVideos = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}/videos`,{
            params:{
                api_key: apiKey,
            }
        });
        console.log(data, 'ini data dari fetch movie video detail')
        return data['results'][0];
    } catch (error) {
        console.log(error, 'error dari fetch movie video detail')
    }
}
export const fetchCasts = () => {
    
}
export const fetchSimilarMovie = () => {
    
}