import { useReducer, useCallback, useMemo } from "react";
import { initialSearchState, searchReducer } from "./search-reducer";
import SearchContext from "./search-context";

const SearchProvider = ({ children }) => {
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState);

  // Update Search Value
  const updateSearchValue = useCallback((value) => {
    dispatch({ type: "UPDATE_SEARCH_VALUE", searchValue: value });
  }, []);

  // Update Search Category
  const updateSearchCategory = useCallback((cat) => {
    dispatch({ type: "UPDATE_CATEGORY", category: cat });
  }, []);

  // Update Search Data
  const updateSearchData = useCallback((data) => {
    dispatch({ type: "UPDATE_DATA", data: data });
  }, []);

  // Save Search Data
  const searchData = useMemo(
    () => searchState.searchData,
    [searchState.searchData]
  );

  const searchContext = {
    searchData: searchData,
    searchValue: searchState.searchValue,
    searchCategory: searchState.searchCategory,
    updateSearchValue,
    updateSearchCategory,
    updateSearchData,
  };

  return (
    <SearchContext.Provider value={searchContext}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
