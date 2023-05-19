const initialSearchState = {
  searchData: null,
  searchValue: "",
  searchCategory: "movie",
  isLoading: false,
  hasError: false,
};

const searchReducer = (state = initialSearchState, action) => {
  if (action.type === "UPDATE_SEARCH_VALUE") {
    return {
      ...state,
      searchValue: action.searchValue,
    };
  }

  if (action.type === "UPDATE_CATEGORY") {
    return {
      ...state,
      searchCategory: action.category,
    };
  }

  if (action.type === "UPDATE_DATA") {
    return {
      ...state,
      searchData: action.data,
    };
  }

  return state;
};

export { initialSearchState, searchReducer };
