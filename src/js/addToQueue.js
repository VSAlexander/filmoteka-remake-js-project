import { closeModal } from './movieModal';

const modal = document.querySelector('[data-modal]');
export const addToQueueBtn = modal.querySelector('.button-queue-modal');
export let queueMoviesArr =
  JSON.parse(localStorage.getItem('queueMovies')) || [];

function addToQueue() {
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

  queueMoviesArr.push(movieObj);
  localStorage.setItem('queueMovies', JSON.stringify(queueMoviesArr));
  addToQueueBtn.textContent = 'Delete from queue';
  addToQueueBtn.removeEventListener('click', handleQueueButtonClick);
  addToQueueBtn.addEventListener('click', handleDeleteQueueButtonClick);
}

export function handleQueueButtonClick() {
  addToQueue();

  // dispatch custom event when movie is adding to queue list
  const queueAddEvent = new Event('queueAdd');
  window.dispatchEvent(queueAddEvent);
}

export function handleDeleteQueueButtonClick() {
  const title = modal.querySelector('.movie-header').textContent;
  queueMoviesArr = queueMoviesArr.filter(movie => movie.title !== title);
  localStorage.setItem('queueMovies', JSON.stringify(queueMoviesArr));
  addToQueueBtn.textContent = 'Add to queue';
  addToQueueBtn.removeEventListener('click', handleDeleteQueueButtonClick);
  addToQueueBtn.addEventListener('click', handleQueueButtonClick);

  // dispatch custom event when movie is deleting from queue list
  const queueDeleteEvent = new Event('queueDelete');
  window.dispatchEvent(queueDeleteEvent);

  if (document.location.pathname === '/library.html') {
    closeModal();
  }
}

addToQueueBtn.addEventListener('click', handleQueueButtonClick);
