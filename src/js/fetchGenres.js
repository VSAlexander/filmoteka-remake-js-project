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
    return JSON.parse(localStorage.getItem('genres'));
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// export async function getGenres() {
//   const storedGenres = localStorage.getItem('movieGenres');
//   if (storedGenres) {
//     return JSON.parse(storedGenres);
//   }
//   try {
//     const response = await axios.get(GENRES_URL);
//     const data = response.data;

//     localStorage.setItem('movieGenres', JSON.stringify(data.genres));

//     return data.genres;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }
