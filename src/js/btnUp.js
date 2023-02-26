const btnUp = document.querySelector('#btn-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    btnUp.classList.add('btn-up--active');
  } else {
    btnUp.classList.remove('btn-up--active');
  }
});

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
