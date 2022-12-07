// const bodyRef = document.querySelector('body');
// const switchToggleRef = document.querySelector('#codepen');

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };


// loadingThem();
// switchToggleRef.addEventListener('change', chengeTheme);

// function chengeTheme() {
//   bodyRef.classList.toggle(Theme.DARK);
//   bodyRef.classList.toggle(Theme.LIGHT);

//   getCurrentTheme(bodyRef.classList);
// }

// function getCurrentTheme(currentThem) {
//   localStorage.setItem('Theme', currentThem);
// }

// function loadingThem() {
//   const savedThem = localStorage.getItem('Theme');
//   if (savedThem === Theme.DARK) {
//     bodyRef.classList.add(savedThem);
//     switchToggleRef.checked = true;
//   } else {
//     bodyRef.classList.add(Theme.LIGHT);
//   }

//   const delClassElem = () => {
//     bodyRef.classList.remove(Theme.LIGHT, Theme.DARK);
//     modalDivContent.classList.remove(Theme.LIGHT, Theme.DARK);
//   };
//   inputChange.addEventListener('change', () => {
//     delClassElem();
//     if (inputChange.checked) {
//       localStorage.setItem('Theme', 'darkTheme');
//       bodyRef.classList.add(Theme.DARK);
//       modalDivContent.classList.add(Theme.DARK);
//     } else {
//       localStorage.setItem('Theme', 'lightTheme');
//       bodyRef.classList.add(Theme.LIGHT);
//       modalDivContent.classList.add(Theme.LIGHT);
//     }
//   });
//   if (localStorage.getItem('Theme') === 'darkTheme') {
//     inputChange.setAttribute('checked', true);
//     bodyRef.classList.add(Theme.DARK);
//     modalDivContent.classList.add(Theme.DARK);

//   }
// }
