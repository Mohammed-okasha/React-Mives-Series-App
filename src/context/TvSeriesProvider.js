import { useReducer, useEffect } from "react";
import { useHttp } from "../hooks/use-http";
import { initialTvSeriesState, tvSeriesReducer } from "./tvSeries-reducer";
import TvSeriesContext from "./tvSeries-context";
import { apiConfig } from "../api/api-config";
const { base_url, API_KEY } = apiConfig;

const TvSeriesProvider = ({ children }) => {
  const [tvSeriesState, dispatch] = useReducer(
    tvSeriesReducer,
    initialTvSeriesState
  );
  const { sendRequest: fetchTvSeries } = useHttp();

  // Page Change
  const pageChange = (data) => {
    dispatch({ type: "PAGE_CHANGE", data: data });
  };

  // handle Sort Tv Series
  const handleSortTvSeries = (data) => {
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

  const tvSeriesCtx = {
    tvSeriesList: tvSeriesState.tvSeriesList,
    sortBy: tvSeriesState.sortBy,
    genre: tvSeriesState.genre,
    year: tvSeriesState.year,
    totalPages: tvSeriesState.totalPages,
    pageChange,
    handleSortTvSeries,
    discoverGenresHandler,
    selectYearHandler,
  };

  useEffect(() => {
    const updateTvSeriesHandler = (data) => {
      const updatedResults = data.results.map((tvSeries) => {
        return { ...tvSeries, media_type: "tv" };
      });

      dispatch({
        type: "FETCH_TV_SERIES",
        data: {
          results: updatedResults,
          totalPages: data.total_pages >= 500 ? 500 : data.total_pages,
        },
      });
    };

    fetchTvSeries(
      {
        url: `${base_url}/discover/tv?api_key=${API_KEY}&with_watch_monetization_types=flatrate`,
      },
      updateTvSeriesHandler
    );
  }, [fetchTvSeries]);

  return (
    <TvSeriesContext.Provider value={tvSeriesCtx}>
      {children}
    </TvSeriesContext.Provider>
  );
};

export default TvSeriesProvider;
