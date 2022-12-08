import axios from "axios";
import { checkLengthOfGenres } from "./fetch-and-render-trending";
import {getMovies} from './fetch-and-render-trending'

const form = document.querySelector('.search-form');
const moviesList = document.querySelector('.movies-list');

export async function searchMovie(movieForSearch) {
    try{
    
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5266ce003df04ebad77cca2af658cdf2&language=en-US&page=1&include_adult=false&query=${movieForSearch}`)
    showMovies(response.data.results);
    if(!response.data.total_results){
        error()
    }
        return response.data.results;
    }
        
        catch {
            error();
        }
};

form.addEventListener('submit', onInputSearch);

function onInputSearch(event){
    event.preventDefault();
    const movieForSearch = event.currentTarget.elements.searchQuery.value;
    searchMovie(movieForSearch);
}

function error() {
    const notification = document.querySelector('.notification');

  notification.classList.remove('is-hidden');
  moviesList.innerHTML = '';
  
  const removeNotification = () => {
    setTimeout(() => {
      notification.classList.add('is-hidden');
      getMovies();
    }, 3000);
  };
  removeNotification();
};

function showMovies(movies) {
            moviesList.innerHTML = '';
            moviesList.innerHTML += renderMovieCard(movies);
}

function renderMovieCard(movies) {
    return movies
      .map(
        movie => `<li class="movies-list__item">
        <div class="movies-list__item-thumb">
          <img loading="lazy"
            class="movies-list__item-card-img"
            src="https://image.tmdb.org/t/p/w342${movie.poster_path}"
            srcset="https://image.tmdb.org/t/p/w342${movie.poster_path} 1x,
            https://image.tmdb.org/t/p/w780${movie.poster_path} 2x"
            alt="${movie.title}">
        </div>
          
            
          <div class="movies-list__item-caption">
              <h2 class="movies-list__item-title">${movie.title}</h2>
              <p class="movies-list__item-info">${checkLengthOfGenres(
                movie.genre_ids
              )} | ${
          movie.release_date.slice(0, 4)
            ? movie.release_date.slice(0, 4)
            : 'No info'
        } <span class="rating">${movie.vote_average.toFixed(1)}</span></p>
          </div>
          </li>`
      )
      .join('');
  } 