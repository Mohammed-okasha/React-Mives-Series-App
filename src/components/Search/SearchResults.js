import React from "react";
import Container from "../UI/Layouts/Container";
import GridLayout from "../UI/Layouts/GridLayout";
import MovieCard from "../MovieCard/MovieCard";
import Actor from "../MovieDetails/CastList/Actor";
import Pagination from "../UI/Pagination";
import { apiConfig } from "../../api/api-config";
//==================================================================
const SearchResults = (props) => {
  const { data, category, value, onUpdateSearchData } = props;

  let results;

  if (data.results.length > 0) {
    results = (
      <GridLayout>
        {data.results.map((item) => {
          if (item.media_type === "person") {
            return <Actor key={item.id} actor={item} />;
          }

          return <MovieCard key={item.id} movie={item} />;
        })}
      </GridLayout>
    );
  } else {
    results = <h2 className="text-center">no results found!</h2>;
  }

  const pageChangeHandler = async (page) => {
    const pageNumber = page.selected + 1;

    const searchCategory = category === "actors" ? "person" : category;

    const res = await fetch(
      `${apiConfig.base_url}/search/${searchCategory}?api_key=${apiConfig.API_KEY}&query=${value}&page=${pageNumber}`
    );

    if (res.status !== 200) {
      throw new Error("error");
    }

    const data = await res.json();
    // Updated Results
    const updatedResults = data.results.map((item) => {
      return {
        ...item,
        media_type: searchCategory,
      };
    });

    onUpdateSearchData({ ...data, results: updatedResults });

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="search_results">
      <Container>{results}</Container>
      {data.results.length > 0 && (
        <Pagination
          pageCount={data.total_pages}
          onPageChange={pageChangeHandler}
        />
      )}
    </section>
  );
};

export default React.memo(SearchResults);
