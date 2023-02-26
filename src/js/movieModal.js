import {
  watchedMoviesArr,
  addToWatchedBtn,
  handleWatchedButtonClick,
  handleDeleteWatchedButtonClick,
} from './addToWatched';

import {
  queueMoviesArr,
  addToQueueBtn,
  handleQueueButtonClick,
  handleDeleteQueueButtonClick,
} from './addToQueue';

const body = document.querySelector('body');
const backdrop = document.querySelector('.backdrop');
const movieList = document.querySelector('.movies-list');

export function openModal(movieCard) {
  document.body.style.overflow = 'hidden';
  body.classList.add('modal-open');
  backdrop.classList.remove('is-hidden');

  // extracting content from movie card elements
  const thumb = movieCard.querySelector('.movies-list__item-thumb').innerHTML;
  const title = movieCard.querySelector('.movies-list__item-title').textContent;
  const votes = movieCard.querySelector('.vote_count').textContent;
  const vote = movieCard.querySelector('.rating').textContent;
  const popularity = movieCard.querySelector('.popularity').textContent;
  const original_title = movieCard.querySelector('.original_title').textContent;
  const genres = movieCard.querySelector('.genres').textContent;
  const overview = movieCard.querySelector('.overview').textContent;
  const release_date = movieCard.querySelector('.release_date').textContent;

  // embedding this content into movie modal window elements
  document.querySelector('.image-thumb').innerHTML = thumb;
  document.querySelector('.movie-header').innerHTML = title;
  document.querySelector('.vote').innerHTML = vote;
  document.querySelector('.votes').innerHTML = votes;
  document.querySelector('.popularity-modal').innerHTML = popularity;
  document.querySelector('.original_title-modal').innerHTML = original_title;
  document.querySelector('.genres-modal').innerHTML = genres;
  document.querySelector('.overview-modal').innerHTML = overview;
  document.querySelector('.release_date-modal').innerHTML = release_date;

  // Check if the movie is already in the watched or queue list
  const isInWatched = watchedMoviesArr.some(movie => movie.title === title);
  const isInQueue = queueMoviesArr.some(movie => movie.title === title);

  // Update the text content of the buttons and add corresponding listeners to them accordingly
  if (isInWatched) {
    addToWatchedBtn.textContent = 'Delete from watched';
    addToWatchedBtn.addEventListener('click', handleDeleteWatchedButtonClick);
  } else {
    addToWatchedBtn.textContent = 'Add to watched';
    addToWatchedBtn.addEventListener('click', handleWatchedButtonClick);
  }
  if (isInQueue) {
    addToQueueBtn.textContent = 'Delete from queue';
    addToQueueBtn.addEventListener('click', handleDeleteQueueButtonClick);
  } else {
    addToQueueBtn.textContent = 'Add to queue';
    addToQueueBtn.addEventListener('click', handleQueueButtonClick);
  }
}

movieList.addEventListener('click', event => {
  const movieCard = event.target.closest('[data-modal-open]');
  if (movieCard) {
    openModal(movieCard);
  }
});

export function closeModal() {
  document.body.style.overflow = 'auto';
  body.classList.remove('modal-open');
  backdrop.classList.add('is-hidden');
}

// Add event listener to close the modal when the user clicks on modal close button or backdrop
document.addEventListener('click', event => {
  if (
    event.target.matches('[data-modal-close]') ||
    event.target.matches('.backdrop')
  ) {
    closeModal();
  }
});

// Add event listener to close the modal when the user presses the ESC key
document.addEventListener('keydown', event => {
  if (body.classList.contains('modal-open') && event.key === 'Escape') {
    closeModal();
  }
});
