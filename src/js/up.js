import throttle from 'lodash.throttle';
const upBtnRef = document.querySelector('.up-btn-wrapper')

window.addEventListener('scroll', throttle(hideElOnScroll(upBtnRef), 250));
upBtnRef.addEventListener('click', toPageTopOnClick);

function hideElOnScroll(el) {
  return function hideOnScroll() {
    if (pageYOffset < document.documentElement.clientHeight) {
      el.classList.add('visually-hidden');
    } else {
      el.classList.remove('visually-hidden');
    }
  };
}

function toPageTopOnClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}