export function searchMovie(movieForSearch) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5266ce003df04ebad77cca2af658cdf2&language=en-US&page=1&include_adult=false&query=${movieForSearch}`
  ).then(response => {
    if (!response.ok) {
      console.log(
        'Search result is not sucessfull. Enter the correct movie name and try again'
      );
    }
    return response.json;
  });
}

input.addEventListener('submit', () => {
  const movieForSearch = input.value.trim().toLowerCase();
  if (movieForSearch.lenght > 0) {
    searchMovie(movieForSearch).then(showMovie).catch(error);
  } else {
    console.log('Enter the correct movie name and try again');
  }
});

function error() {
  console.log('Search result is not sucessfull.');
}
