import { getGenresFromLocalStorage } from './fetchGenres';

export function renderMovieCards(data) {
  return data
    .map(
      movie => `<li class="movies-list__item">
        <img loading="lazy"
          class="movies-list__item-card-img"
          src="https://image.tmdb.org/t/p/w342${movie.poster_path}"
          srcset="https://image.tmdb.org/t/p/w342${movie.poster_path} 1x,
          https://image.tmdb.org/t/p/w500${movie.poster_path} 2x"

          alt="${movie.title}">
          
        <div class="movies-list__item-caption">
            <h2 class="movies-list__item-title">${movie.title}</h2>
            <p class="movies-list__item-info">${getGenresFromLocalStorage(
              'genres'
            )
              .filter(element => movie.genre_ids.includes(element.id))
              .map(element => element.name)
              .join(', ')} | ${
        movie.release_date.slice(0, 4)
          ? movie.release_date.slice(0, 4)
          : 'No information about release date'
      }</p>
        </div>
        </li>`
    )
    .join('');
}
