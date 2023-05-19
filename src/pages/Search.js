import { useNavigation } from "react-router-dom";
import SearchProvider from "../context/SearchProvider";
import SearchRoot from "../components/Search/SearchRoot";
import Loading from "../components/UI/Loaders/Loading";
//===============================================================
const SearchPage = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loading />}
      <SearchProvider>
        <SearchRoot />
      </SearchProvider>
    </>
  );
};

export default SearchPage;
