import { useReducer, useCallback, useContext } from "react";
import MoviesContext from "../../context/movies-context";
import {
  defaultFilterState,
  filterReducer,
} from "../FilterItems/filter-reducer";
import SortList from "../FilterItems/SortList";
import GenresList from "../FilterItems/GenresList";
import YearsList from "../FilterItems/YearsList";
//=========================================================
const MoviesFilterList = (props) => {
  const [filterState, dispatch] = useReducer(filterReducer, defaultFilterState);
  const moviesCtx = useContext(MoviesContext);

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
        onSortData={moviesCtx.handleSortMovies}
        mediaType="movie"
        year={moviesCtx.year}
        genre={moviesCtx.genre}
        isSort={filterState.isSort}
      />
      <GenresList
        onToggleGenres={toggleGenresListHandler}
        onDiscoverGenres={moviesCtx.discoverGenresHandler}
        genresList={props.genres}
        mediaType="movie"
        sortValue={moviesCtx.sortBy}
        year={moviesCtx.year}
        isGenre={filterState.isGenre}
      />
      <YearsList
        onToggleYears={toggleYearsListHandler}
        onSelectYear={moviesCtx.selectYearHandler}
        startYear={1900}
        isYear={filterState.isYear}
        mediaType="movie"
        sortValue={moviesCtx.sortBy}
        genre={moviesCtx.genre}
      />
    </div>
  );
};

export default MoviesFilterList;
