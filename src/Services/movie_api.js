import axios from 'axios';

const API_KEY = '56df3cdaf4656bc2a0c7d7aaff77ded0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  // include_adult: 'false',
  page: 1,
  per_page: 12,
};

export async function getPopularFilmsHome() {
  const { data } = await axios.get('/trending/all/day');
  return data.results;
}

export async function getSearchMovie(queryMessage) {
  const { data } = await axios.get(`/search/movie?&query=${queryMessage}`);
  return data.results;
}

export async function getMovieDetiasl(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`);
  // console.log(data);
  return data;
}

export async function getActorsCast(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
  // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
}

export async function getReviews(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.cast;
  // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
}

// Ключ API(v3 auth)
// 56df3cdaf4656bc2a0c7d7aaff77ded0

// Пример API - запроса
// https://api.themoviedb.org/3/movie/550?api_key=56df3cdaf4656bc2a0c7d7aaff77ded0

// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmRmM2NkYWY0NjU2YmMyYTBjN2Q3YWFmZjc3ZGVkMCIsInN1YiI6IjYyZWMxYzkwYjNlNjI3MDA2MTYzZDdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rQDv3wcx0DLSGrljquyK1IugZWdu16n-_CZhTiG7sZQ
