import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

//local Storage import
import {  } from './';


const apiKey = '5266ce003df04ebad77cca2af658cdf2';

//Set card-collection list, didnt find in documents
const cardFilm = document.querySelector('.card__colection');

cardFilm.addEventListener('click', openModal);

function fetchOneMovieInfo(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => ({
      ...data,
      popularity: data.popularity.toFixed(1),
    }));
}

function openModal(e) {
  e.preventDefault();

  fetchOneMovieInfo(e.target.dataset.id)
    .then(data => {
      if (e.target.nodeName !== 'IMG') return;

      const markup = modalFilmCard(data);
      const modal = basicLightbox.create(markup);

      modal.show();

      const closeBtn = document.querySelector('.modal-close-btn');
      closeBtn.addEventListener('click', closeModal);

      window.addEventListener('keydown', closeModalHandler);

      function closeModalHandler(e) {
        if (e.code === 'Escape') {
          modal.close();
          window.removeEventListener('keydown', closeModalHandler);
        }
      }

      function closeModal(e) {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
      }

      //new Function
      initStorageBtns();
    })
    .then(data => {})
    .catch(error => {
      console.log('oops!');
    });
}