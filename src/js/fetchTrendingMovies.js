import axios from 'axios';

const API_KEY = '2954afe7c35181c36bf30aa4bc9ce527';

export async function fetchTrendingMovies(page) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
