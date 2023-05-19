const initialMoviesState = {
  movies: [],
  sortBy: "",
  genre: "",
  year: "",
  totalPages: 0,
};

const moviesReducer = (state = initialMoviesState, action) => {
  if (action.type === "FETCH_MOVIES") {
    return {
      ...state,
      movies: action.data.results,
      totalPages: action.data.totalPages,
    };
  }

  if (action.type === "PAGE_CHANGE") {
    return {
      ...state,
      movies: action.data.results,
      totalPages: action.data.totalPages,
    };
  }

  if (action.type === "SORT_BY") {
    return {
      ...state,
      movies: action.data.results,
      sortBy: action.data.sortValue,
      totalPages: action.data.totalPages,
    };
  }

  if (action.type === "DISCOVER_GENRES") {
    return {
      ...state,
      movies: action.data.results,
      genre: action.data.genreId,
      totalPages: action.data.totalPages,
    };
  }

  if (action.type === "SELECT_YEAR") {
    return {
      ...state,
      movies: action.data.results,
      year: action.data.year,
      totalPages: action.data.totalPages,
    };
  }

  return state;
};

export { initialMoviesState, moviesReducer };
