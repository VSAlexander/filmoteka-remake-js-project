import lozad from 'lozad'; // library for lazy loading images
import { fetchTrendingMovies } from './fetchTrendingMovies';
import { renderMovieCards } from './renderMovieCards';

const movieListEl = document.querySelector('.movies-list');
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
      displayTrendingMovies(currentPage);
    }
  },
  { rootMargin: '10%' }
);

async function displayTrendingMovies(page) {
  isLoading = true;
  const { results, total_pages } = await fetchTrendingMovies(page);
  const movieCardsHTML = renderMovieCards(results);
  movieListEl.innerHTML += movieCardsHTML;
  isLoading = false;

  const lastMovieCardEl = movieListEl.lastElementChild;
  lastMovieCardObserver.observe(lastMovieCardEl); // watching for last movie card
  imagesObserver.observe(); // watching for movie card's image

  if (total_pages === page) {
    lastMovieCardObserver.disconnect();
  }
}

displayTrendingMovies(currentPage);
