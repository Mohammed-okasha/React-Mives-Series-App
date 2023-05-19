import React from "react";
import { useHttp } from "../../hooks/use-http";
import { apiConfig } from "../../api/api-config";

const SearchInput = (props) => {
  const { searchCategory, onUpdateSearchValue, onUpdateSearchData } = props;
  const { sendRequest: fetchSearchData } = useHttp();

  const updateSearchData = (category, data) => {
    const updatedResults = data.results.map((item) => {
      return { ...item, media_type: category };
    });

    onUpdateSearchData({ ...data, results: updatedResults });
  };

  const changeHandler = async (e) => {
    const { value } = e.target;
    onUpdateSearchValue(value);

    if (!value) {
      onUpdateSearchData(null);
      return;
    }

    const category = searchCategory === "actors" ? "person" : searchCategory;

    fetchSearchData(
      {
        url: `${apiConfig.base_url}/search/${category}?api_key=${apiConfig.API_KEY}&query=${value}`,
      },
      updateSearchData.bind(null, category)
    );
  };

  return (
    <div className="search_input">
      <input
        type="text"
        name="search-input"
        placeholder="Search in ScreenX"
        onChange={changeHandler}
      />
    </div>
  );
};

export default React.memo(SearchInput);
