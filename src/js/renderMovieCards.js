import { getGenresFromLS } from './fetchGenres';

export function renderMovieCards(data) {
  return data
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average,
        vote_count,
        popularity,
        overview,
        original_title,
      }) => `
    <li class="movies-list__item" data-modal-open>
      <div class="movies-list__item-thumb">
        <img loading="lazy"
          class="movies-list__item-card-img lozad"
          data-src="${
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : 'https://placehold.co/400x600?text=No+image'
          }"
          data-srcset="${
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path} 1x, https://image.tmdb.org/t/p/w500${poster_path} 2x`
              : 'https://placehold.co/400x600?text=No+image'
          }"
          alt="${title}">
      </div>
      <div class="movies-list__item-caption">
        <h2 class="movies-list__item-title">${title}</h2>
        <p class="movies-list__item-info">${checkLengthOfGenres(genre_ids)} | ${
        release_date.slice(0, 4)
          ? release_date.slice(0, 4)
          : 'Release date unknown'
      } <span class="rating">${vote_average.toFixed(1)}</span></p>
      </div>
      <span class="vote_count hidden">${vote_count}</span>
      <span class="popularity hidden">${popularity.toFixed(1)}</span>
      <span class="genres hidden">${checkLengthOfGenres(genre_ids)}</span>
      <span class="overview hidden">${overview}</span>
      <span class="original_title hidden">${original_title}</span>
      <span class="release_date hidden">${
        release_date.slice(0, 4)
          ? release_date.slice(0, 4)
          : 'Release date unknown'
      }</span>
    </li>
  `
    )
    .join('');
}

function checkLengthOfGenres(array) {
  const allGenres = getGenresFromLS()
    .filter(genre => array.includes(genre.id))
    .map(genre => genre.name);

  if (allGenres.includes('Science Fiction')) {
    allGenres.splice(allGenres.indexOf('Science Fiction'), 1, 'Sci-Fi');
  }

  if (allGenres.length === 0) {
    return 'No genres specified';
  }

  if (allGenres.length > 3) {
    allGenres.splice(2, 1, 'Other');
    return allGenres.slice(0, 3).join(', ');
  } else {
    return allGenres.slice(0, 3).join(', ');
  }
}
