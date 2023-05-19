import { useReducer, useContext, useCallback } from "react";
import TvSeriesContext from "../../context/tvSeries-context";
import {
  defaultFilterState,
  filterReducer,
} from "../FilterItems/filter-reducer";
import SortList from "../FilterItems/SortList";
import GenresList from "../FilterItems/GenresList";
import YearsList from "../FilterItems/YearsList";
//================================================================
const TvSeriesFilterList = (props) => {
  const [filterState, dispatch] = useReducer(filterReducer, defaultFilterState);
  const tvSeriesCtx = useContext(TvSeriesContext);

  const toggleSortListHandler = useCallback(() => {
    dispatch({ type: "TOGGLE_SORT" });
  }, []);
  const toggleGenresListHandler = useCallback(() => {
    dispatch({ type: "TOGGLE_GENRES" });
  }, []);
  const toggleYearsListHandler = useCallback(() => {
    dispatch({ type: "TOGGLE_YEARS" });
  }, []);

  return (
    <div className="filter_list">
      <SortList
        onToggleSortList={toggleSortListHandler}
        onSortData={tvSeriesCtx.handleSortTvSeries}
        mediaType="tv"
        year={tvSeriesCtx.year}
        genre={tvSeriesCtx.genre}
        isSort={filterState.isSort}
      />
      <GenresList
        onToggleGenres={toggleGenresListHandler}
        onDiscoverGenres={tvSeriesCtx.discoverGenresHandler}
        genresList={props.genres}
        mediaType="tv"
        sortValue={tvSeriesCtx.sortBy}
        year={tvSeriesCtx.year}
        isGenre={filterState.isGenre}
      />
      <YearsList
        onToggleYears={toggleYearsListHandler}
        onSelectYear={tvSeriesCtx.selectYearHandler}
        startYear={1944}
        isYear={filterState.isYear}
        mediaType="tv"
        sortValue={tvSeriesCtx.sortBy}
        genre={tvSeriesCtx.genre}
      />
    </div>
  );
};

export default TvSeriesFilterList;
