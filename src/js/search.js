import axios from 'axios';
import { checkLengthOfGenres } from './fetch-and-render-trending';
import { getMovies } from './fetch-and-render-trending';

const form = document.querySelector('.search-form');
const moviesList = document.querySelector('.movies-list');

///////    INFINITE SCROLL   ///////////

let nextPage = 2;

const infiniteObserver = new IntersectionObserver(([entry], observer) => {
  if (entry.isIntersecting) {
    observer.unobserve(entry.target);
    getMovies(nextPage++);
  }
});

//////////////////////

const backdrop = document.querySelector('.backdrop');

const addToWatchedBtn = document.querySelector('.button-watched-modal');
const addToQueueBtn = document.querySelector('.button-queue-modal');

/////

export async function searchMovie(movieForSearch) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=5266ce003df04ebad77cca2af658cdf2&language=en-US&page=1&include_adult=false&query=${movieForSearch}`
    );
    showMovies(response.data.results);

    /// Modal logic

    moviesList.querySelectorAll('.movies-list__item').forEach(function (el) {
      el.addEventListener('click', event => {
        // console.log(event.currentTarget);
        document.body.style.overflow = 'hidden';

        const li = event.currentTarget;
        const thumb = li.querySelector('.movies-list__item-thumb').innerHTML;
        const title = li.querySelector('.movies-list__item-title').textContent;
        const votes = li.querySelector('.vote_count').textContent;
        const vote = li.querySelector('.rating').textContent;
        const popularity = li.querySelector('.popularity').textContent;
        const original_title = li.querySelector('.original_title').textContent;
        const genres = li.querySelector('.genres').textContent;
        const overview = li.querySelector('.overview').textContent;

        document.querySelector('.image-thumb').innerHTML = thumb;
        document.querySelector('.movie-header').innerHTML = title;
        document.querySelector('.vote').innerHTML = vote;
        document.querySelector('.votes').innerHTML = votes;
        document.querySelector('.popularity-modal').innerHTML = popularity;
        document.querySelector('.original_title-modal').innerHTML =
          original_title;
        document.querySelector('.genres-modal').innerHTML =
          checkLengthOfGenres(genres);
        document.querySelector('.overview-modal').innerHTML = overview;
        document.querySelector('.markup-for-library').appendChild(li);

        backdrop.classList.remove('is-hidden');
      });
    });

    /////

    //// Adding movie card to localStorage

    addToWatchedBtn.addEventListener('click', event => {
      const movieCardForLibrary = document.querySelector(
        '.markup-for-library'
      ).innerHTML;

      localStorage.setItem(
        'add-to-watched',
        JSON.stringify(movieCardForLibrary)
      );
    });

    ////

    const lastCard = document.querySelector('.movies-list__item:last-child');
    if (lastCard) {
      infiniteObserver.observe(lastCard);
    }

    if (!response.data.total_results) {
      error();
    }
    return response.data.results;
  } catch {
    error();
  }
}

form.addEventListener('submit', onInputSearch);

function onInputSearch(event) {
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
}

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

          <span class="vote_count hidden">${movie.vote_count}</span>
        <span class="vote_average hidden">${movie.vote_average.toFixed(
          1
        )}</span>
        <span class="popularity hidden">${movie.popularity.toFixed(1)}</span>
        <span class="genres hidden">${movie.genre_ids}</span>
        <span class="overview hidden">${movie.overview}</span>
        <span class="original_title hidden">${movie.original_title}</span>
          </li>`
    )
    .join('');
}

backdrop.addEventListener(
  'click',
  function (event) {
    if (
      event.target.matches('.modal-close-btn') ||
      !event.target.closest('.modal')
    ) {
      backdrop.classList.add('is-hidden');
      document.body.style.overflow = 'scroll';
    }
  },
  false
);
