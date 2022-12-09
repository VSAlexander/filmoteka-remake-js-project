window.addEventListener('load', () => {
  if (localStorage.getItem('add-to-watched') === null) {
    return;
  }
  const libraryList = document.querySelector('.library-list');
  libraryList.innerHTML = JSON.parse(localStorage.getItem('add-to-watched'));
});
