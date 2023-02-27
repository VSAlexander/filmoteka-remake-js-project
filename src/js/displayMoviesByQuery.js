import lozad from 'lozad'; // library for lazy loading images
import { fetchMovieByQuery } from './fetchMoviesByQuery';
import { renderMovieCards } from './renderMovieCards';

const movieListEl = document.querySelector('.movies-list');
const formEl = document.querySelector('.search-form');

let currentPage = 1;
let isLoading = false;

const imagesObserver = lozad('.movies-list__item-card-img', {
  loaded: function (el) {
    el.classList.add('is-loaded');
  },
  threshold: 0.4,
});

// Create an IntersectionObserver object that watches for the last movie card in the list to come into view.
const lastMovieCardObserver = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting && !isLoading) {
      // When the last movie card comes into view, call a function to fetch the next page of movies.
      currentPage++;
      displayMoviesByQuery(currentPage);
    }
  },
  { rootMargin: '10%' }
);

async function displayMoviesByQuery(page) {
  isLoading = true;
  const query = formEl.elements.searchQuery.value;
  const { results, total_pages } = await fetchMovieByQuery(query, page);

  if (results.length === 0) {
    // If no movies are returned from the API, display a message to the user.
    movieListEl.innerHTML = `<h2 class='no-movies'>No movies found for your search query</h2>`;
  } else {
    const movieCardsHTML = renderMovieCards(results);
    if (page === 1) {
      // If it's the first page, replace the existing movie list with the new one.
      movieListEl.innerHTML = movieCardsHTML;
    } else {
      // Otherwise, append the new movie list to the existing one.
      movieListEl.innerHTML += movieCardsHTML;
    }

    isLoading = false;

    const lastMovieCardEl = movieListEl.lastElementChild;

    lastMovieCardObserver.observe(lastMovieCardEl); // watching for last movie card
    imagesObserver.observe(); // watching for movie card's image

    if (total_pages === page) {
      lastMovieCardObserver.disconnect();
    }
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  currentPage = 1; // Reset current page to 1 when searching
  displayMoviesByQuery(currentPage);
}

formEl.addEventListener('submit', handleSubmit);
