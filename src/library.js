
window.addEventListener('load', () => {
  if (localStorage.getItem('add-to-watched') === null) {
    return;
  }
  const libraryList = document.querySelector('.library-list');
  libraryList.innerHTML = JSON.parse(localStorage.getItem('add-to-watched'));
});

import { team } from './js/team';
// import { searchMovie } from './js/search';
// import { spinner } from './js/spinner';
// import {
//   fetchGenres,
//   getGenresFromLocalStorage,
//   API_KEY,
// } from './js/fetch-and-render-trending';

//  import { up } from './js/up';

