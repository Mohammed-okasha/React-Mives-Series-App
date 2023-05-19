import { useLoaderData, useNavigation, json } from "react-router-dom";
import DiscoverRoot from "../components/UI/Layouts/DiscoverRoot";
import MoviesProvider from "../context/MoviesProvider";
import MoviesFilterList from "../components/DiscoverMovies/MoviesFilterList";
import FilteredMovies from "../components/DiscoverMovies/FilteredMovies";
import Loading from "../components/UI/Loaders/Loading";
import { apiConfig } from "../api/api-config";
//================================================================
const MoviesPage = () => {
  const { genres } = useLoaderData();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loading />}
      <DiscoverRoot>
        <MoviesProvider>
          <MoviesFilterList genres={genres} />
          <FilteredMovies />
        </MoviesProvider>
      </DiscoverRoot>
    </>
  );
};

export default MoviesPage;
//================================================================
export async function moviesGenresLoader() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiConfig.API_KEY}`
  );

  if (res.status !== 200 && !res.ok) {
    throw json(
      { message: `could not fetch the movies genres list!` },
      { status: res.status }
    );
  }

  return res;
}
