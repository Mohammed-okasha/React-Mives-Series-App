import React, { useState } from "react";
import { useHttp } from "../../hooks/use-http";
import { FaChevronDown } from "react-icons/fa";
import { apiConfig } from "../../api/api-config";
const { base_url, API_KEY } = apiConfig;

// Create Movies Years
function createMoviesYears(startYear) {
  const years = [];

  for (let i = startYear; i <= 2023; i++) {
    years.unshift(i);
  }

  return years;
}
//=======================================================
const YearsList = (props) => {
  const [year, setYear] = useState("select year");
  const { sendRequest: fetchData } = useHttp();
  const { onToggleYears, onSelectYear, isYear, mediaType, sortValue, genre } =
    props;

  const yearsList = createMoviesYears(props.startYear);

  const updateData = (year, data) => {
    const updatedResults = data.results.map((item) => {
      return {
        ...item,
        media_type: mediaType,
      };
    });
    onSelectYear({
      results: updatedResults,
      year: year,
      totalPages: data.total_pages >= 500 ? 500 : data.total_pages,
    });
  };

  const selectYearHandler = async (year) => {
    setYear(year);
    const yearQuery =
      mediaType === "movie" ? `&year=${year}` : `&first_air_date_year=${year}`;

    fetchData(
      {
        url: `${base_url}discover/${mediaType}?api_key=${API_KEY}${sortValue}${yearQuery}
        ${genre}&with_watch_monetization_types=flatrate`,
      },
      updateData.bind(null, yearQuery)
    );

    onToggleYears();
  };

  return (
    <div className="filter_item">
      <div className="select_menu">
        <span className="menu_label">year</span>
        <button
          type="button"
          className={`toggle ${isYear ? "active" : ""}`}
          onClick={onToggleYears}
        >
          <span>{year}</span>
          <FaChevronDown />
        </button>
      </div>
      {isYear && (
        <ul className="dropdown_list">
          {yearsList.map((year) => (
            <li
              key={year}
              className="dropdown_item"
              onClick={() => selectYearHandler(year)}
            >
              {year}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(YearsList);
