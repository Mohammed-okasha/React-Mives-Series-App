import React, { useState } from "react";
import { apiConfig } from "../../api/api-config";

const tabsList = ["movie", "tv", "actors"];
//================================================================
const SearchTabs = (props) => {
  const [currIndex, setCurrIndex] = useState(0);
  const { searchValue, onUpdateSearchCategory, onUpdateSearchData } = props;

  // Switch Active Tab
  const switchActiveTab = async (cat, tabIndex) => {
    setCurrIndex(tabIndex);
    onUpdateSearchCategory(cat);

    if (!searchValue) {
      return;
    }

    const category = cat === "actors" ? "person" : cat;

    try {
      const res = await fetch(
        `${apiConfig.base_url}/search/${category}?api_key=${apiConfig.API_KEY}&query=${searchValue}`
      );

      if (res.status !== 200) {
        throw new Error("error");
      }

      const data = await res.json();
      // Updated Results
      const updatedResults = data.results.map((item) => {
        return { ...item, media_type: category };
      });

      onUpdateSearchData({ ...data, results: updatedResults });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search_tabs">
      <ul className="tabs_list">
        {tabsList.map((tab, tabIndex) => (
          <li key={tab}>
            <button
              type="button"
              className={`tab_btn ${tabIndex === currIndex ? "active" : ""}`}
              onClick={() => switchActiveTab(tab, tabIndex)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SearchTabs);
