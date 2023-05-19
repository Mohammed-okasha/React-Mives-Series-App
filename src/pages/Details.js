import { useLoaderData, useNavigation, defer } from "react-router-dom";
import { loadMovie, loadSimilarMovies } from "../router/loaders/loader-data";
import DetailsBanner from "../components/Banners/DetailsBanner";
import Section from "../components/UI/Layouts/Section";
import DetailsRoot from "../components/MovieDetails/DetailsRoot";
import VideosList from "../components/MovieDetails/VideosList/VideosList";
import BackdropsList from "../components/MovieDetails/BackdropsList/BackdropsList";
import PostersList from "../components/MovieDetails/PostersList/PostersList";
import Loading from "../components/UI/Loaders/Loading";
//==================================================================
const DetailsPage = () => {
  const { movie, similarMovies } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { backdrops, posters } = movie.images;

  const moreDetails = {
    status: movie.info.status,
    original_language: movie.info.original_language,
    budget: movie.info.budget,
    revenue: movie.info.revenue,
    production_companies: movie.info.production_companies,
  };

  const hasSimilarMovies = similarMovies.results.length > 0;

  return (
    <>
      {isLoading && <Loading />}
      <DetailsBanner movie={movie.info} />
      <DetailsRoot
        cast={movie.cast}
        reviews={movie.reviews}
        moreDetails={moreDetails}
      />
      <VideosList videos={movie.videos.results.slice(0, 5)} />
      <BackdropsList backdrops={backdrops.slice(0, 10)} />
      <PostersList posters={posters.slice(0, 12)} />
      {hasSimilarMovies && (
        <Section title="YOU MAY ALSO LIKE" movies={similarMovies.results} />
      )}
    </>
  );
};

export default DetailsPage;
//==================================================================
export const movieDetailsLoader = async ({ params }) => {
  return defer({
    movie: await loadMovie(params),
    similarMovies: await loadSimilarMovies(params),
  });
};
