/* import {getMovies} from './fetchTrendingMovies' */

// const form = document.querySelector('.search-form');
// const moviesList = document.querySelector('.movies-list');

// export function searchMovie(movieForSearch) {

//     return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5266ce003df04ebad77cca2af658cdf2&language=en-US&page=1&include_adult=false&query=${movieForSearch}`)
//     .then(response => {
//         if(!response.ok){
//             error();
//         }
//         return response.json;
//     })
// };

// form.addEventListener('submit', onInputSearch);

// async function onInputSearch(event){
//     event.preventDefault();
//     const movieForSearch = event.currentTarget.elements.searchQuery.value;
//     console.log(movieForSearch);
//     if(movieForSearch.length > 0) {
//         await searchMovie(movieForSearch).then(showMovies).catch(error);   
//     } else {
//         console.log('Enter the correct movie name and try again');
//     }
// }

// function error() {
//     const notification = document.querySelector('.notification');

//   notification.classList.remove('is-hidden');
//   getMovies();
//   const removeNotification = () => {
//     setTimeout(() => {
//       notification.classList.add('is-hidden');
//     }, 3000);
//   };
//   removeNotification();
// };

// function showMovies(movies) {
//             moviesList.innerHTML = '';
//             moviesList.innerHTML += renderMovieCard(movies);
// }

// function renderMovieCard(movies) {
//     const {results, total_results} = movies;
//     return results
//       .map(
//         movie => `<li class="movies-list__item">
//         <div class="movies-list__item-thumb">
//           <img loading="lazy"
//             class="movies-list__item-card-img"
//             src="https://image.tmdb.org/t/p/w342${movie.poster_path}"
//             srcset="https://image.tmdb.org/t/p/w342${movie.poster_path} 1x,
//             https://image.tmdb.org/t/p/w780${movie.poster_path} 2x"
//             alt="${movie.title}">
//         </div>
          
            
//           <div class="movies-list__item-caption">
//               <h2 class="movies-list__item-title">${movie.title}</h2>
//                ${movie.release_date.slice(0, 4)
//             ? movie.release_date.slice(0, 4)
//             : 'No info'
//         } <span class="rating">${movie.vote_average.toFixed(1)}</span></p>
//           </div>
//           </li>`
//       )
//       .join('');
//   }
