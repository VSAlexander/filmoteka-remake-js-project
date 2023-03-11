import axios from 'axios';

const API_KEY = '2954afe7c35181c36bf30aa4bc9ce527';
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

export async function fetchGenres() {
  if (localStorage.getItem('genres') !== null) {
    return;
  }
  try {
    const response = await axios.get(GENRES_URL);
    setGenresInLS(response.data.genres);
  } catch (error) {
    console.error(error);
  }
}

function setGenresInLS(value) {
  try {
    const stringifiedGenres = JSON.stringify(value);
    localStorage.setItem('genres', stringifiedGenres);
  } catch (error) {
    console.error(error.message);
  }
}

export function getGenresFromLS() {
  try {
    const genres = JSON.parse(localStorage.getItem('genres'));
    return genres ? genres : [];
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

fetchGenres();
