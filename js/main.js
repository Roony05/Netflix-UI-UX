import { carousel_slick } from "./carousel.js";
import { firstCarousel } from "./first_carousel.js";

//fetch api movies carousel
const a_movie_row = async (api, title, isPoster) => {
  const response = await axios.get(api);
  const movies = response.data.results;
  console.log(movies);
  const body = document.getElementById("body");

  body.innerHTML += `
    <div class="movie-row" id="movie-row">
      <div class="movie-row__title" id="movie-row__title">
        <h2>${title}</h2>
    </div>

    <div class="movie-row__items">  
        <div class="responsive-carousel" id="responsive-carousel">
          ${movies
            .map((movie) => {
              return `
            <a class="item" href="movie.html?id=${movie.id}">
              <img src="https://image.tmdb.org/t/p/original/${
                isPoster ? movie.poster_path : movie.backdrop_path
              }" alt="${movie.title}" />
            </a>`;
            })
            .join("")}
        </div>
    </div>`;
};
// all movies rows carousels
const create_all_movies_rows = async () => {
  await firstCarousel();

  await a_movie_row(
    "https://api.themoviedb.org/3/trending/all/week?api_key=5a022ed623b52d1a1e4013927ce9fe49&language=en-US",
    "Trending Movies",
    true
  );
  await a_movie_row(
    "https://api.themoviedb.org/3/discover/movie?api_key=5a022ed623b52d1a1e4013927ce9fe49&with_genres=35",
    "Comedy Movies",
    false
  );
  await a_movie_row(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=5a022ed623b52d1a1e4013927ce9fe49&language=en-US",
    "Top Rated",
    false
  );
  await a_movie_row(
    "https://api.themoviedb.org/3/discover/movie?api_key=5a022ed623b52d1a1e4013927ce9fe49&with_genres=878",
    "Science Fiction Movies",
    false
  );
  await a_movie_row(
    "https://api.themoviedb.org/3/discover/movie?api_key=5a022ed623b52d1a1e4013927ce9fe49&with_genres=18",
    "Drama Movies",
    false
  );
  await a_movie_row(
    "https://api.themoviedb.org/3/discover/movie?api_key=5a022ed623b52d1a1e4013927ce9fe49&with_genres=28",
    "Action Movies",
    false
  );

  //finish all movies-rows
  carousel_slick();
};
create_all_movies_rows();
