import axios from 'axios';
import lozad from 'lozad';
const observe = lozad();

const moviesList = document.querySelector('.movies-list');

const API_KEY = '2954afe7c35181c36bf30aa4bc9ce527';

/////////    GENRES     /////////

async function fetchGenres() {
  if (localStorage.getItem('genres') !== null) {
    return;
  }
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    setGenresInLocalStorage('genres', response.data.genres);
  } catch (error) {
    console.error(error);
  }
}

function setGenresInLocalStorage(key, value) {
  try {
    const stringifiedGenres = JSON.stringify(value);
    localStorage.setItem(key, stringifiedGenres);
  } catch (error) {
    console.error(error.message);
  }
}

function getGenresFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

fetchGenres();

///////////////////////

///////    INFINITE SCROLL   ///////////

let nextPage = 2;

const infiniteObserver = new IntersectionObserver(([entry], observer) => {
  if (entry.isIntersecting) {
    observer.unobserve(entry.target);
    getMovies(nextPage++);
  }
});

//////////////////////

///////////// FETCH TRENDING MOVIES  /////////////

const backdrop = document.querySelector('.backdrop');

const addToWatchedBtn = document.querySelector('.button-watched-modal');
const addToQueueBtn = document.querySelector('.button-queue-modal');

export async function getMovies(page = 1) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    moviesList.innerHTML += renderMovieCards(response.data.results);
    observe.observe();

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
  } catch (error) {
    console.error(error);
  }
}

///////////////////////

/////////// RENDERING MOVIE CARDS ///////////

function renderMovieCards(data) {
  return data
    .map(
      movie => `<li class="movies-list__item">
      <div class="movies-list__item-thumb">
        <img loading="lazy"
          class="movies-list__item-card-img lozad"
          data-src="https://image.tmdb.org/t/p/w342${movie.poster_path}"
          data-srcset="https://image.tmdb.org/t/p/w342${movie.poster_path} 1x,
          https://image.tmdb.org/t/p/w500${movie.poster_path} 2x"

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

export function checkLengthOfGenres(array) {
  const allGenres = getGenresFromLocalStorage('genres')
    .filter(genre => array.includes(genre.id))
    .map(genre => genre.name);

  if (allGenres.includes('Science Fiction')) {
    allGenres.splice(allGenres.indexOf('Science Fiction'), 1, 'Sci-Fi');
  }

  if (allGenres.length > 3) {
    allGenres.splice(2, 1, 'Other');
    return allGenres.slice(0, 3).join(', ');
  } else {
    return allGenres.slice(0, 3).join(', ');
  }
}

//////////////////////////////////////

getMovies();

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

//// Inserting in library-list movie cards

// window.addEventListener('load', () => {
//   if (localStorage.getItem('add-to-watched') === null) {
//     return;
//   }
//   const libraryList = document.querySelector('.library-list');
//   libraryList.innerHTML = JSON.parse(localStorage.getItem('add-to-watched'));
// });

////
