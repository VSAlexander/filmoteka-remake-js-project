import axios from 'axios';

import { API_KEY, fetchGenres } from './fetchGenres';
import { renderMovieCards } from './renderMovieCards';

// const API_KEY = '2954afe7c35181c36bf30aa4bc9ce527';

const moviesList = document.querySelector('.movies-list');

fetchGenres();

async function getMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );

    moviesList.innerHTML += renderMovieCards(response.data.results);
  } catch (error) {
    console.error(error);
  }
}

getMovies();
