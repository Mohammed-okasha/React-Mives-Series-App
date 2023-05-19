import React, { useState } from "react";
import { useHttp } from "../../hooks/use-http";
import { FaChevronDown } from "react-icons/fa";
import { apiConfig } from "../../api/api-config";
const { base_url, API_KEY } = apiConfig;

const sortList = [
  "popularity",
  "release date",
  "revenue",
  "primary release date",
  "vote average",
  "vote count",
];
//================================================================
const SortList = (props) => {
  const [sortValue, setSortValue] = useState("popularity");
  const { sendRequest: fetchData } = useHttp();
  const { onToggleSortList, onSortData, isSort, mediaType, year, genre } =
    props;

  const updateData = (sortValue, data) => {
    const updatedResults = data.results.map((item) => {
      return {
        ...item,
        media_type: mediaType,
      };
    });

    onSortData({
      results: updatedResults,
      sortValue,
      totalPages: data.total_pages >= 500 ? 500 : data.total_pages,
    });
  };

  // Sort Data Handler
  const sortDataHandler = async (value) => {
    setSortValue(value);

    const sortValue = `&sort_by=${value
      .split("")
      .map((char) => (char.includes(" ") ? (char = "_") : char))
      .join("")}.desc`;

    fetchData(
      {
        url: `${base_url}discover/${mediaType}?api_key=${API_KEY}${sortValue}&year=${year}
        ${genre}&with_watch_monetization_types=flatrate`,
      },
      updateData.bind(null, sortValue)
    );

    onToggleSortList();
  };

  return (
    <div className="filter_item">
      <div className="select_menu">
        <span className="menu_label">sort by</span>
        <button
          type="button"
          className={`toggle ${isSort ? "active" : ""}`}
          onClick={onToggleSortList}
        >
          <span>{sortValue}</span>
          <FaChevronDown />
        </button>
      </div>
      {isSort && (
        <ul className="dropdown_list">
          {sortList.map((item) => (
            <li
              key={item}
              className="dropdown_item"
              onClick={() => sortDataHandler(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(SortList);
