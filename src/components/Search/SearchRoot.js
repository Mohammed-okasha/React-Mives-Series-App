import { useContext } from "react";
import SearchContext from "../../context/search-context";
import Container from "../UI/Layouts/Container";
import SearchTabs from "./SearchTabs";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
//===============================================================
const SearchRoot = () => {
  const {
    searchData,
    searchValue,
    searchCategory,
    updateSearchValue,
    updateSearchCategory,
    updateSearchData,
  } = useContext(SearchContext);

  return (
    <>
      <section className="search_wrapper">
        <Container>
          <SearchTabs
            searchValue={searchValue}
            onUpdateSearchCategory={updateSearchCategory}
            onUpdateSearchData={updateSearchData}
          />
          <SearchInput
            searchCategory={searchCategory}
            onUpdateSearchValue={updateSearchValue}
            onUpdateSearchData={updateSearchData}
          />
        </Container>
      </section>
      {searchData && (
        <SearchResults
          data={searchData}
          category={searchCategory}
          value={searchValue}
          onUpdateSearchData={updateSearchData}
        />
      )}
    </>
  );
};

export default SearchRoot;
