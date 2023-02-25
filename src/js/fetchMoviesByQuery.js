import axios from 'axios';

const API_KEY = '2954afe7c35181c36bf30aa4bc9ce527';

export async function fetchMovieByQuery(query, page) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  const data = response.data;
  console.log(data);
  return data;
}
