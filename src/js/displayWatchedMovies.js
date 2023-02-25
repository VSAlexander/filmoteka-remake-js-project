// import { watchedMoviesArr } from './addToWatched';

const watchedListEl = document.querySelector('.watched');

function displayWatchedMovies() {
  const watchedMoviesArr =
    JSON.parse(localStorage.getItem('watchedMovies')) || [];
  watchedListEl.innerHTML = watchedMoviesArr
    .reverse()
    .map(movie => {
      return `
        <li class="movies-list__item" data-modal-open>
          <div class="movies-list__item-thumb">${movie.image_thumb}</div>
          <div class="movies-list__item-caption">
            <h2 class="movies-list__item-title">${movie.title}</h2>
            <p class="movies-list__item-info">${movie.genres} | ${movie.release_date}
              <span class="rating">${movie.vote}</span>
            </p>
          </div>
          <span class="vote_count hidden">${movie.votes}</span>
          <span class="popularity hidden">${movie.popularity}</span>
          <span class="genres hidden">${movie.genres}</span>
          <span class="overview hidden">${movie.overview}</span>
          <span class="original_title hidden">${movie.original_title}</span>
          <span class="release_date hidden">${movie.release_date}</span>
        </li>
      `;
    })
    .join('');
  console.log('Watched movies HTML:');
}

window.addEventListener('storage', event => {
  if (event.key === 'watchedMovies') {
    console.log('Hello');
    displayWatchedMovies();
  }
});

// displayWatchedMovies();

// Logic of choosing watchedList by clicking on watchedBtn

const watchedBtn = document.getElementById('watchedBtn');
const queueBtn = document.getElementById('queueBtn');
const watchedList = document.querySelector('.watched.movies-list');
const queueList = document.querySelector('.queue.movies-list');

// Display the watched list by default
watchedBtn.classList.add('active');
watchedList.style.display = 'flex';
queueList.style.display = 'none';

// Add event listeners to the watchedBtn
watchedBtn.addEventListener('click', () => {
  watchedBtn.classList.add('active');
  queueBtn.classList.remove('active');
  watchedList.style.display = 'flex';
  queueList.style.display = 'none';
});

//
