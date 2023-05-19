import { useLoaderData, useNavigation } from "react-router-dom";
import SlidersBanners from "../components/Banners/SlidersBanners";
import Section from "../components/UI/Layouts/Section";
import Loading from "../components/UI/Loaders/Loading";
//============================================================
function HomePage() {
  const { movies, serials } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loading />}
      <SlidersBanners movies={movies.popularMovies.items} />
      <Section title="trending movies" movies={movies.trendingMovies.items} />
      <Section title="series airing today" movies={serials.airingToday.items} />
      <Section title="top rated movies" movies={movies.topRatedMovies.items} />
      <Section title="popular series" movies={serials.popular.items} />
      <Section title="popular movies" movies={movies.popularMovies.items} />
      <Section title="top Rated series" movies={serials.topRated.items} />
      <Section title="popular movies" movies={movies.popularMovies.items} />
    </>
  );
}

export default HomePage;
