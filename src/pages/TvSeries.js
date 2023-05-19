import { useLoaderData, useNavigation, json } from "react-router-dom";
import DiscoverRoot from "../components/UI/Layouts/DiscoverRoot";
import TvSeriesProvider from "../context/TvSeriesProvider";
import TvSeriesFilterList from "../components/DiscoverTvSeries/TvSeriesFilterList";
import FilteredTvSeries from "../components/DiscoverTvSeries/FilteredTvSeries";
import Loading from "../components/UI/Loaders/Loading";
import { apiConfig } from "../api/api-config";
//========================================================================
const TvSeriesPage = () => {
  const { genres } = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loading />}
      <DiscoverRoot>
        <TvSeriesProvider>
          <TvSeriesFilterList genres={genres} />
          <FilteredTvSeries />
        </TvSeriesProvider>
      </DiscoverRoot>
    </>
  );
};

export default TvSeriesPage;
//========================================================================
export async function tvSeriesGenresLoader() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiConfig.API_KEY}`
  );

  if (res.status !== 200) {
    throw json(
      { message: "could not fetch the tv series genres list!" },
      { status: res.status }
    );
  }

  return res;
}
