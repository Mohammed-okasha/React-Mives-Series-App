import { useReducer, useEffect } from "react";
import { useHttp } from "../hooks/use-http";
import { initialMoviesState, moviesReducer } from "./movies-reducer";
import MoviesContext from "./movies-context";
import { apiConfig } from "../api/api-config";
const { base_url, API_KEY } = apiConfig;
//========================================================================
const MoviesProvider = ({ children }) => {
  const [moviesState, dispatch] = useReducer(moviesReducer, initialMoviesState);
  const { sendRequest: fetchMovies } = useHttp();

  // Page Change
  const pageChange = (data) => {
    dispatch({ type: "PAGE_CHANGE", data: data });
  };

  // handle Sort Movies
  const handleSortMovies = (data) => {
    dispatch({ type: "SORT_BY", data: data });
  };

  // Discover Genres Handler
  const discoverGenresHandler = (data) => {
    dispatch({ type: "DISCOVER_GENRES", data: data });
  };

  // Select Year Handler
  const selectYearHandler = (data) => {
    dispatch({ type: "SELECT_YEAR", data: data });
  };

  const moviesCtx = {
    movies: moviesState.movies,
    sortBy: moviesState.sortBy,
    genre: moviesState.genre,
    year: moviesState.year,
    totalPages: moviesState.totalPages,
    pageChange,
    handleSortMovies,
    discoverGenresHandler,
    selectYearHandler,
  };

  useEffect(() => {
    const updateMoviesHandler = (data) => {
      const updatedResults = data.results.map((item) => {
        return {
          ...item,
          media_type: "movie",
        };
      });

      dispatch({
        type: "FETCH_MOVIES",
        data: {
          results: updatedResults,
          totalPages: data.total_pages >= 500 ? 500 : data.total_pages,
        },
      });
    };

    fetchMovies(
      {
        url: `${base_url}discover/movie?api_key=${API_KEY}&with_watch_monetization_types=flatrate`,
      },
      updateMoviesHandler
    );
  }, [fetchMovies]);

  return (
    <MoviesContext.Provider value={moviesCtx}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
