import { apiConfig } from "./api-config";
const { base_url, API_KEY } = apiConfig;

const moviesUrls = {
  trendingMovies: {
    url: `${base_url}trending/all/week?api_key=${API_KEY}`,
  },
  topRatedMovies: {
    url: `${base_url}movie/top_rated?api_key=${API_KEY}`,
    media_type: "movie",
  },
  popularMovies: {
    url: `${base_url}movie/popular?api_key=${API_KEY}`,
    media_type: "movie",
  },
  upcomingMovies: {
    url: `${base_url}movie/upcoming?api_key=${API_KEY}`,
    media_type: "movie",
  },
  nowPlayingMovies: {
    url: `${base_url}movie/now_playing?api_key=${API_KEY}`,
    media_type: "movie",
  },
};

export default moviesUrls;

// actionMovies: { url: `${base_url}movie/action?api_key=${API_KEY}` },
// comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=351`,
// horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres-10749`
// top_100_movies: "https://imdb-top-100-movies.p.rapidapi.com",
