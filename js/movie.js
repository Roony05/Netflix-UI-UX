const path = window.location.search;
const params = new URLSearchParams(path);
const movie_id = params.get("id");
console.log(movie_id);
//information about the movies
const fetch_movie_detail = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=5a022ed623b52d1a1e4013927ce9fe49&language=en-US`
  );

  const movie = response.data;
  const movie_background = document.getElementById("movie-background");
  const movieTitle = document.getElementById("movie_title");
  const movie_description = document.getElementById("movie_description");

  console.log(movie_id);

  console.log(response.data.original_title);

  movie_background.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  movieTitle.textContent = movie.original_title;
  movie_description.textContent = movie.overview;
};
const show_modal = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=5a022ed623b52d1a1e4013927ce9fe49`
  );
  const movie = response.data;
  console.log(response.data.results);
  const trailerKey = movie.results.find((video) => video.type === "Trailer" && video.official)?.key;
  console.log(trailerKey);

  const movie_row = document.getElementById("movie");
  movie_row.innerHTML += `
    <div class="modal" id="modal">
      <iframe
        width="1519"
        height="607"
        src="https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&loop=1&playlist=${trailerKey}"
        title="${movie.name}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        id = "iframe"
      ></iframe>
      <i class="fa fa-times" onclick="hide_modal()"></i>
    </div>
  `;
};
const hide_modal = () => {
  const movie_modal = document.getElementById("modal");
  movie_modal.remove();
};
fetch_movie_detail();
