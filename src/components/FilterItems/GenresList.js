import React, { useState } from "react";
import { useHttp } from "../../hooks/use-http";
import { FaChevronDown } from "react-icons/fa";
import { apiConfig } from "../../api/api-config";
const { base_url, API_KEY } = apiConfig;
//===================================================================
const GenresList = (props) => {
  const [genre, setGenre] = useState("select genre");

  const { sendRequest: fetchMovies } = useHttp();
  const {
    onToggleGenres,
    onDiscoverGenres,
    genresList,
    isGenre,
    mediaType,
    sortValue,
    year,
  } = props;

  const updateData = (genreId, data) => {
    const updatedResults = data.results.map((item) => {
      return {
        ...item,
        media_type: mediaType,
      };
    });
    onDiscoverGenres({
      results: updatedResults,
      genreId: `&with_genres=${genreId}`,
      totalPages: data.total_pages >= 500 ? 500 : data.total_pages,
    });
  };

  const discoverGenresHandler = async (genreId, genreName) => {
    setGenre(genreName);

    fetchMovies(
      {
        url: `${base_url}discover/${mediaType}?api_key=${API_KEY}${sortValue}${year}&with_genres=${genreId}
        &with_watch_monetization_types=flatrate`,
      },
      updateData.bind(null, genreId)
    );

    onToggleGenres();
  };

  return (
    <div className="filter_item">
      <div className="select_menu">
        <span className="menu_label">genres</span>
        <button
          type="button"
          className={`toggle ${isGenre ? "active" : ""}`}
          onClick={onToggleGenres}
        >
          <span>{genre}</span>
          <FaChevronDown />
        </button>
      </div>
      {isGenre && (
        <ul className="dropdown_list">
          {genresList.map((item) => {
            const { id, name } = item;
            return (
              <li
                key={id}
                className="dropdown_item"
                onClick={() => discoverGenresHandler(id, name)}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default React.memo(GenresList);
