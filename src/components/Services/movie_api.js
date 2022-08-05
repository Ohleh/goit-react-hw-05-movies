import axios from 'axios';

const API_KEY = '56df3cdaf4656bc2a0c7d7aaff77ded0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  key: API_KEY,
  //     language: 'en-US',
  //     include_adult: 'false',
  //       page: 1,
  //       per_page: 12,
};

export async function getPopularFilmsHome() {
  const { response } = await axios.get('/trending/all/day');
  console.log(response);
  return response;
}

// const get = getPopularFilmsHome().then(res => console.log(res));
// console.log(get);

const exprt = { getPopularFilmsHome };

export default exprt;

// https://api.themoviedb.org/3/trending/all/day?api_key=56df3cdaf4656bc2a0c7d7aaff77ded0

// export async function getReviews(movie_id) {
//   const response = await axios.get(`${movie_id}/reviews&language=en-US&page=1`);
//   return response.data;
// }

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<56df3cdaf4656bc2a0c7d7aaff77ded0>>&language=en-US&page=1

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

// export async function fetchAuthors() {
//   const response = await axios.get(`/authors`);
//   return response.data;
// }

// Ключ API(v3 auth)
// 56df3cdaf4656bc2a0c7d7aaff77ded0

// Пример API - запроса
// https://api.themoviedb.org/3/movie/550?api_key=56df3cdaf4656bc2a0c7d7aaff77ded0

// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmRmM2NkYWY0NjU2YmMyYTBjN2Q3YWFmZjc3ZGVkMCIsInN1YiI6IjYyZWMxYzkwYjNlNjI3MDA2MTYzZDdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rQDv3wcx0DLSGrljquyK1IugZWdu16n-_CZhTiG7sZQ
