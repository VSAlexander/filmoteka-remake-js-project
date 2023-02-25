import { queueMoviesArr } from './addToQueue';
import { openModal, closeModal } from './movieModal';

const backdrop = document.querySelector('.backdrop');

const queueListEl = document.querySelector('.queue.movies-list');

function displayQueueMovies() {
  queueMoviesArr = JSON.parse(localStorage.getItem('queueMovies')) || [];
  queueListEl.innerHTML = queueMoviesArr
    ?.reverse()
    ?.map(movie => {
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
}

// displayQueueMovies();

window.addEventListener('storage', displayQueueMovies);

if (backdrop.classList.contains('is-hidden')) {
  displayQueueMovies();
}

// Logic of choosing queueList by clicking on queueBtn

const watchedBtn = document.getElementById('watchedBtn');
const queueBtn = document.getElementById('queueBtn');
const watchedList = document.querySelector('.watched.movies-list');
const queueList = document.querySelector('.queue.movies-list');

// Add event listeners to the queueBtn
queueBtn.addEventListener('click', () => {
  queueBtn.classList.add('active');
  watchedBtn.classList.remove('active');
  watchedList.style.display = 'none';
  queueList.style.display = 'flex';
});

// Modal logic
queueListEl.addEventListener('click', event => {
  const movieCard = event.target.closest('[data-modal-open]');
  if (movieCard) {
    openModal(movieCard);
  }
});

//

// if (backdrop.classList.contains('is-hidden')) {
//   displayQueueMovies();
// }

// The reason the modal window is not working
// when I switch to the queue list is that I
// am adding the click event listener for opening
// the modal window to the movieList element. In my code,
// the movieList element refers only to the movies list
// in the watched list. When I switch to the queue list,
// the movieList element still refers to the movies list
// in the watched list, so the event listener is not applied
// to the movies in the queue list.
