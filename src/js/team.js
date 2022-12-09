import * as basicLightbox from 'basiclightbox';

import team__lead from '../images/team/sergiy.jpg';
import scrum from '../images/team/oleksandr_kostenko.jpg';
import dmytro from '../images/team/dmytro.jpg';
import iryna from '../images/team/iryna.jpg';
import olena from '../images/team/olena.jpg';
import oleksiy from '../images/team/oleksiy.jpg';
import empty from '../images/header-home-desktop@1x.jpg';

// import social from '../images/icons/sprite.svg';

const containerRef = document.querySelector('.js-team__modal');

const markup = `<ul class="team__wrapper">
    <li class="team__lead list">
    <img src="${team__lead}" alt="Kolonuik Serhii" class="team__image">
        <p class="team__name">Kolonuik Serhii</p>
        <p class="team__role">Team Lead</p>
    </li>
    <li class="team__card">
        <img src="${scrum}" alt="oleksandr_kostenko" class="team__image">
        <p class="team__name">Kostenko Oleksandr</p>
        <p class="team__role">Scrum/Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${dmytro}" alt="Dmitro Antonenko" class="team__image">
        <p class="team__name">Dmitro Antonenko</p>
        <p class="team__role">Developer</p>
       
    </li>
    <li class="team__card">
        <img src="${iryna}" alt="Havryliuk Iryna" class="team__image">
        <p class="team__name">Havryliuk Iryna</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${olena}" alt="Pedko Olena" class="team__image"> 
        <p class="team__name">Pedko Olena</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${oleksiy}" alt="oleksiy Chernyakin" class="team__image">
        <p class="team__name">Chernyakin Oleksiy</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${empty}" alt="Oleksandr Shevchenko" class="team__image">  
        <p class="team__name">Oleksandr Shevchenko</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${empty}" alt="Kateryna" class="team__image"> 
        <p class="team__name">8</p>
        <p class="team__role">Developer</p>
        
    </li>
    <li class="team__card">
        <img src="${empty}" alt="Kateryna" class="team__image">
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
