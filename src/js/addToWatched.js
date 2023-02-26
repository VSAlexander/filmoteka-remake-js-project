import { closeModal } from './movieModal';

const modal = document.querySelector('[data-modal]');
export const addToWatchedBtn = modal.querySelector('.button-watched-modal');
export let watchedMoviesArr =
  JSON.parse(localStorage.getItem('watchedMovies')) || [];

function addToWatched() {
  // values for movie card
  const image_thumb = modal.querySelector('.image-thumb').innerHTML;
  const title = modal.querySelector('.movie-header').textContent;
  const release_date = modal.querySelector('.release_date-modal').textContent;
  const vote = modal.querySelector('.vote').textContent;
  const genres = modal.querySelector('.genres-modal').textContent;

  // values for movie modal
  const votes = modal.querySelector('.votes').textContent;
  const popularity = modal.querySelector('.popularity-modal').textContent;
  const overview = modal.querySelector('.overview-modal').textContent;
  const original_title = modal.querySelector(
    '.original_title-modal'
  ).textContent;

  const movieObj = {
    image_thumb,
    title,
    release_date,
    vote,
    genres,
    votes,
    popularity,
    overview,
    original_title,
  };
  watchedMoviesArr.push(movieObj);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMoviesArr));
  addToWatchedBtn.textContent = 'Delete from watched';
  addToWatchedBtn.removeEventListener('click', handleWatchedButtonClick);
  addToWatchedBtn.addEventListener('click', handleDeleteWatchedButtonClick);
}

export function handleWatchedButtonClick() {
  addToWatched();

  // dispatch custom event when movie is adding to watched list
  const watchedAddEvent = new Event('watchedAdd');
  window.dispatchEvent(watchedAddEvent);
}

export function handleDeleteWatchedButtonClick() {
  const title = modal.querySelector('.movie-header').textContent;
  watchedMoviesArr = watchedMoviesArr.filter(movie => movie.title !== title);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMoviesArr));
  addToWatchedBtn.textContent = 'Add to watched';
  addToWatchedBtn.removeEventListener('click', handleDeleteWatchedButtonClick);
  addToWatchedBtn.addEventListener('click', handleWatchedButtonClick);

  // dispatch custom event when movie is deleting from watched list
  const watchedDeleteEvent = new Event('watchedDelete');
  window.dispatchEvent(watchedDeleteEvent);

  if (document.location.pathname === '/library.html') {
    closeModal();
  }
}

addToWatchedBtn.addEventListener('click', handleWatchedButtonClick);
