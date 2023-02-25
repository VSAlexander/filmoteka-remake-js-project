import axios from 'axios';
import { fetchTrendingMovies } from './fetchTrendingMovies';
import { renderMovieCards } from './renderMovieCards';

const movieListEl = document.querySelector('.movies-list');

let isLoading = false;
let currentPage = 1;
let totalPages = null;

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMoreMovies();
  }
});

observer.observe(document.querySelector('.loader'));

async function loadMoreMovies() {
  if (isLoading) {
    return;
  }

  if (currentPage >= totalPages) {
    return;
  }

  currentPage += 1;
  isLoading = true;

  const loaderEl = document.createElement('li');
  loaderEl.classList.add('loader');

  movieListEl.appendChild(loaderEl);
  try {
    const data = await fetchTrendingMovies(currentPage);
    isLoading = false;
    totalPages = data.total_pages;
    const movieCardsHTML = renderMovieCards(data.results);
    movieListEl.removeChild(loaderEl);
    movieListEl.innerHTML += movieCardsHTML;
  } catch (error) {
    console.error(error);
  }
}

// async function loadMoreMovies(page) {
//   const movies = await fetchTrendingMovies(page);
//   const movieCardsHTML = renderMovieCards(movies);
//   movieListEl.innerHTML += movieCardsHTML;
// }

// const observer = new IntersectionObserver(
//   async entries => {
//     const entry = entries[0];
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       await loadMoreMovies(currentPage);
//     }
//   },
//   { threshold: 0.5 }
// );

// const loaderEl = document.querySelector('.loader');

// observer.observe(loaderEl);
