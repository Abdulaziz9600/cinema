let elCinemaList = $(".js-cinema-list");
let elFormSerach = $(".js-form-search");
let elFlimSerach = $(".js-films-search");
let elMovieTemplate = $("#movies-template").content;

kinolar.splice(100)

let normalizedMovies = kinolar.map((kino) => {
  return {
    title: kino.title,
    cast: kino.cast.join(", "),
    genres: kino.genres.join(", "),
    year: kino.year,
  }
})

let createMovieElement = (movie) => {
  elCinemaList.innerHTML = "";

  let movieElement = elMovieTemplate.cloneNode(true);

  $(".card-title", movieElement).textContent = movie.title;
  $(".card-cast", movieElement).textContent = movie.cast;
  $(".card-genres", movieElement).textContent = movie.genres;
  $(".card-year", movieElement).textContent = movie.year;

  return movieElement;
}

let renderMovies = (movies) => {
  let elResultFragment = document.createDocumentFragment();

  movies.forEach((movie) => {
    elResultFragment.appendChild(createMovieElement(movie));
  })

  elCinemaList.appendChild(elResultFragment);
}

renderMovies(normalizedMovies);

elFormSerach.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let searchMovie = new RegExp(elFlimSerach.value.trim(), "gi");

  let searchResult = normalizedMovies.filter((movie) => {
    if (movie.title.match(searchMovie)) {
      return movie.title.match(searchMovie);
    }
  })
  renderMovies(searchResult);
})