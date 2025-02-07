//first carousel
const firstCarousel = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/tv?api_key=5a022ed623b52d1a1e4013927ce9fe49&with_networks=213"
  );
  const movies = response.data.results;
  const title = document.getElementById("Title");
  
  //movie -> item
  const items = movies.map((movie) => {
    return `
    <div class="item">
        <img
         src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
         alt="${movie.title}"
          />
        <div class="movie__info">
          <h2 id="movie_title">${movie.name}</h2>
          <p id="movie_description">${movie.overview}</p>

        </div>
    </div>`;
  });
  console.log(items);
  const singleCarousel = document.getElementById("single-carousel");
  singleCarousel.innerHTML = items.join("");
};

export { firstCarousel };
