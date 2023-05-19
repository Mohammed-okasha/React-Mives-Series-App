const initialTvSeriesState = {
  tvSeriesList: [],
  sortBy: "",
  genre: "",
  year: "",
  totalPages: 0,
};

const tvSeriesReducer = (state = initialTvSeriesState, action) => {
  if (action.type === "FETCH_TV_SERIES") {
    return {
      ...state,
      tvSeriesList: action.data.results,
      totalPages: action.data.totalPages,
    };
  }

  if (action.type === "PAGE_CHANGE") {
    return {
      ...state,
      tvSeriesList: action.data.results,
      totalPages: action.data.totalPages,
    };
  }

  if (action.type === "SORT_BY") {
    return {
      ...state,
      tvSeriesList: action.data.results,
      sortBy: action.data.sortValue,
      totalPages: action.data.totalPages,
    };
  }

  if (action.type === "DISCOVER_GENRES") {
    return {
      ...state,
      tvSeriesList: action.data.results,
      genre: action.data.genreId,
      totalPages: action.data.totalPages,
    };
  }

  if (action.type === "SELECT_YEAR") {
    return {
      ...state,
      tvSeriesList: action.data.results,
      year: action.data.year,
      totalPages: action.data.totalPages,
    };
  }

  return state;
};

export { initialTvSeriesState, tvSeriesReducer };
