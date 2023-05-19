import React, { useContext } from "react";
import { useHttp } from "../../hooks/use-http";
import MoviesContext from "../../context/movies-context";
import GridLayout from "../UI/Layouts/GridLayout";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../UI/Pagination";
import { apiConfig } from "../../api/api-config";
const { base_url, API_KEY } = apiConfig;
//===========================================================
const FilteredMovies = () => {
  const { movies, sortBy, year, genre, pageChange, totalPages } =
    useContext(MoviesContext);

  const { sendRequest: fetchMovies, isLoading, hasError } = useHttp();

  const updateMoviesHandler = (data) => {
    const updatedMovies = data.results.map((movie) => {
      return {
        ...movie,
        media_type: "movie",
      };
    });
    pageChange({
      results: updatedMovies,
      totalPages: data.total_pages >= 500 ? 500 : data.total_pages,
    });
  };

  const pageChangeHandler = async (page) => {
    const pageNumber = page.selected + 1;

    fetchMovies(
      {
        url: `${base_url}discover/movie?api_key=${API_KEY}${sortBy}&page=${pageNumber}${year}
        ${genre}&with_watch_monetization_types=flatrate`,
      },
      updateMoviesHandler
    );
  };

  const thereAreMovies = movies.length > 0;

  return (
    <div className="filtered_media_list">
      {thereAreMovies && (
        <>
          <GridLayout>
            {movies.map((item) => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </GridLayout>
          <Pagination pageCount={totalPages} onPageChange={pageChangeHandler} />
        </>
      )}
      {!thereAreMovies && <h2 className="text-center">No movies found!</h2>}
    </div>
  );
};

export default FilteredMovies;
