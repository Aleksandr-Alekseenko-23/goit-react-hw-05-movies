import axios from 'axios';

const KEY = 'b2380104f6a4d3099e2f62e25dfd4988';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTreending() {
  const response = await axios('/trending/movie/day', {
    params: {
      api_key: KEY,
      size: 20,
    },
  });
  return response.data.results;
}

export async function fetchMovies(movieTitle) {
  const response = await axios(`/search/movie?query=${movieTitle}`, {
    params: {
      api_key: KEY,
      size: 20,
    },
  });
  return response.data.results;
}
export async function getMovie(movieId, path = 'movie') {
  let pathUrl = '';
  switch (path) {
    case 'movie':
      pathUrl = `movie/${movieId}`;
      break;
    case 'çast':
      pathUrl = `movie/${movieId}/credits`;
      break;
    case 'reviews':
      pathUrl = `movie/${movieId}/reviews`;
      break;
    default:
      pathUrl = `movie/${movieId}`;
      break;
  }
  console.log('path', path, 'pathUrl', pathUrl);

  if (pathUrl) {
    const response = await axios(pathUrl, {
      params: {
        api_key: KEY,
      },
    });
    return response.data;
  }
}

// export async function fetchMoviesById(movieId) {
// const response = await axios(`movie/${movieId}`, {
//   params: {
//     api_key: KEY,
//   },
// });
// return response.data;
// }

// export async function fetchMoviesByIdCredits(movieId) {
//   const response = await axios(`movie/${movieId}/credits`, {
//     params: {
//       api_key: KEY,
//     },
//   });
//   return response.data;
// }

// export async function fetchMoviesByIdReviews(movieId) {
//   const response = await axios(`movie/${movieId}/reviews`, {
//     params: {
//       api_key: KEY,
//     },
//   });
//   return response.data;
// }
