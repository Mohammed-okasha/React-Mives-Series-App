import { useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavoriteMedia } from "../store/slices/favoriteMovies-slice";
import Container from "../components/UI/Layouts/Container";
import SectionTitle from "../components/UI/SectionTitle";
import FavoriteList from "../components/FavoriteMedia/FavoriteList";
import Loading from "../components/UI/Loaders/Loading";

const FavoritesPage = () => {
  const { items } = useSelector(selectFavoriteMedia);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loading />}
      <section className="favorite_media">
        <Container>
          <SectionTitle title="favorite media" />
          <FavoriteList favoriteList={items} />
        </Container>
      </section>
    </>
  );
};

export default FavoritesPage;
