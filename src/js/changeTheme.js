const bodyRef = document.querySelector('body');
const switchToggleRef = document.querySelector('#codepen');


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

loadingThem();
switchToggleRef.addEventListener('change', chengeTheme);

function chengeTheme() {
  bodyRef.classList.toggle(Theme.DARK);
  bodyRef.classList.toggle(Theme.LIGHT);

  getCurrentTheme(bodyRef.classList);
}

function getCurrentTheme(currentThem) {
  localStorage.setItem('Theme', currentThem);
}

function loadingThem() {
  const savedThem = localStorage.getItem('Theme');
  if (savedThem === Theme.DARK) {
    bodyRef.classList.add(savedThem);
    switchToggleRef.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

