import throttle from 'lodash.throttle';
const upBtnRef = document.querySelector('.up-btn-wrapper')

window.addEventListener('scroll', throttle(hideElOnScroll(upBtnRef), 250));
upBtnRef.addEventListener('click', toPageTopOnClick);

function toPageTopOnClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}