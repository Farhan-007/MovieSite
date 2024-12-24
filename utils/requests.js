const API_KEY = '7e28b016' ;
const BASE_URL = 'http://www.omdbapi.com/'

// export const getTrendingMovies = async () => {
//     const res = await fetch (`${BASE_URL}/trending/movies/day?language=en-US&api_key=${API_KEY}`);
//     const data = await res.json();
//     return data.results
// }

export const getMovies = async (query) => {
    const res = await fetch (`${BASE_URL}/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();
    return data
}
export const getMovieDetails = async (id) => {
    const res = await fetch (`${BASE_URL}//?apikey=${API_KEY}&i=${id}`);
    const data = await res.json();
    return data
}
// export const getSimilarMovies = async (id) => {
//     const res = await fetch (`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
//     const data = await res.json();
//     return data.results
// }

// http://www.omdbapi.com/?apikey=7e28b016&s=spider-man

// const res = await fetch (`http://www.omdbapi.com/?apikey=7e28b016&s=spider-man`);
//     const data = await res.json();
//     console.log(data.Search)