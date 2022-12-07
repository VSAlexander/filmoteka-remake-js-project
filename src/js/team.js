import * as basicLightbox from 'basiclightbox';

import team__lead from '../images/header-home-desktop@1x.jpg';
import social from '../images/icons/sprite.svg';

const containerRef = document.querySelector('.js-team__modal');

const markup = `<ul class="team__wrapper">
    <li class="team__lead list">
    <img src="${team__lead}" alt="1" class="team__image">
        <p class="team__name">1</p>
        <p class="team__role">Team Lead / Developer </p>
    </li>
    <li class="team__card">
        <img src="${team__lead}" alt="Kateryna" class="team__image">
        <p class="team__name">2</p>
        <p class="team__role">Scrum/Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${team__lead}" alt="Kateryna" class="team__image">
        <p class="team__name">3</p>
        <p class="team__role">Developer</p>
       
    </li>
    <li class="team__card">
        <img src="${team__lead}" alt="Kateryna" class="team__image">
        <p class="team__name">4</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${team__lead}" alt="Kateryna" class="team__image"> 
        <p class="team__name">5</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${team__lead}" alt="Kateryna" class="team__image">
        <p class="team__name">6</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${team__lead}" alt="Kateryna" class="team__image">  
        <p class="team__name">7</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${team__lead}" alt="Kateryna" class="team__image"> 
        <p class="team__name">8</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${team__lead}" alt="Kateryna" class="team__image">
        <p class="team__name">9</p>
        <p class="team__role">Developer</p>
       
    </li>
</ul>`;



containerRef.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}