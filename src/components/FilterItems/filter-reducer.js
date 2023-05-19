const defaultFilterState = {
  isSort: false,
  isGenre: false,
  isYear: false,
};

const filterReducer = (state = defaultFilterState, action) => {
  if (action.type === "TOGGLE_SORT") {
    return {
      isSort: !state.isSort,
      isGenre: false,
      isYear: false,
    };
  }
  if (action.type === "TOGGLE_GENRES") {
    return {
      isSort: false,
      isGenre: !state.isGenre,
      isYear: false,
    };
  }
  if (action.type === "TOGGLE_YEARS") {
    return {
      isSort: false,
      isGenre: false,
      isYear: !state.isYear,
    };
  }

  return state;
};

export { defaultFilterState, filterReducer };
