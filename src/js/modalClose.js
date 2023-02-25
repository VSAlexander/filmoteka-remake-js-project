// (() => {
//   const openModalBtn = document.querySelector('[data-modal-open]');
//   const closeModalBtn = document.querySelector('[data-modal-close]');
//   const modal = document.querySelector('[data-modal]');
//   const backdrop = document.querySelector('.backdrop');

//   function toggleModal() {
//     backdrop.classList.toggle('is-hidden');
//   }

//   openModalBtn.addEventListener('click', toggleModal);
//   closeModalBtn.addEventListener('click', toggleModal);
// })();

document.addEventListener('DOMContentLoaded', () => {
  // your JavaScript code here
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  const backdrop = document.querySelector('.backdrop');

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);
});
