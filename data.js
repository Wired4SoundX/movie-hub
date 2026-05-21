// Array of Objects
let movies = [

  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    date: new Date().toLocaleDateString()
  },

  {
    id: 2,
    title: "Batman",
    genre: "Action",
    date: new Date().toLocaleDateString()
  }

];

// Render Function
const renderMovies = (movieArray) => {

  const source =
    document.getElementById("movieTemplate").innerHTML;

  const template = Handlebars.compile(source);

  const html = template({ movies: movieArray });

  document.getElementById("movieContainer").innerHTML = html;
};

renderMovies(movies);

// Add Movie
document.getElementById("movieForm")
.addEventListener("submit", (e) => {

  e.preventDefault();

  const title =
    document.getElementById("title").value;

  const genre =
    document.getElementById("genre").value;

  const newMovie = {
    id: Date.now(),
    title: title,
    genre: genre,
    date: new Date().toLocaleDateString()
  };

  movies.push(newMovie);

  renderMovies(movies);

  document.getElementById("movieForm").reset();
});

// Delete Movie
const deleteMovie = (id) => {

  movies = movies.filter(movie => movie.id !== id);

  renderMovies(movies);
};

// Search Movie
const searchMovie = () => {

  const searchValue =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const filteredMovies =
    movies.filter(movie =>
      movie.title.toLowerCase().includes(searchValue)
    );

  renderMovies(filteredMovies);
};