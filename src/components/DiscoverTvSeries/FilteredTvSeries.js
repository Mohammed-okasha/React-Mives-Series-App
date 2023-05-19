import { useContext } from "react";
import { useHttp } from "../../hooks/use-http";
import TvSeriesContext from "../../context/tvSeries-context";
import GridLayout from "../UI/Layouts/GridLayout";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../UI/Pagination";
import { apiConfig } from "../../api/api-config";
const { base_url, API_KEY } = apiConfig;
//==============================================================
const FilteredTvSeries = () => {
  const { tvSeriesList, sortBy, genre, year, pageChange, totalPages } =
    useContext(TvSeriesContext);

  const { sendRequest: fetchTvSeries } = useHttp();

  const updateTvSeries = (data) => {
    const updatedTvSeries = data.results.map((tvSeries) => {
      return {
        ...tvSeries,
        media_type: "tv",
      };
    });

    pageChange({
      results: updatedTvSeries,
      totalPages: data.total_pages >= 500 ? 500 : data.total_pages,
    });
  };

  const pageChangeHandler = async (page) => {
    const pageNumber = page.selected + 1;

    fetchTvSeries(
      {
        url: `${base_url}discover/tv?api_key=${API_KEY}${sortBy}&page=${pageNumber}${year}
        ${genre}&with_watch_monetization_types=flatrate`,
      },
      updateTvSeries
    );
  };

  const thereAreTvSeries = tvSeriesList.length > 0;

  return (
    <div className="filtered_media_list">
      {thereAreTvSeries && (
        <>
          <GridLayout>
            {tvSeriesList.map((tvSeries) => (
              <MovieCard key={tvSeries.id} movie={tvSeries} />
            ))}
          </GridLayout>
          <Pagination pageCount={totalPages} onPageChange={pageChangeHandler} />
        </>
      )}

      {!thereAreTvSeries && (
        <h2 className="text-center">No tv series found!</h2>
      )}
    </div>
  );
};

export default FilteredTvSeries;
