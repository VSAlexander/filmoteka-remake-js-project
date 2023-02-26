const footer = document.querySelector('.footer');

let lastScrollY = 0;

// add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // get the current scroll position
  const currentScrollY = window.scrollY;

  // check if the user has scrolled down or up
  if (currentScrollY > lastScrollY) {
    // user scrolled down, hide the footer
    footer.classList.add('footer--hidden');
  } else {
    // user scrolled up, show the footer
    footer.classList.remove('footer--hidden');
  }

  // update the last scroll position
  lastScrollY = currentScrollY;
});
