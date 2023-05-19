import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/use-http";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_FAVORITE } from "../../store/slices/favoriteMovies-slice";
import { selectFavoriteMedia } from "../../store/slices/favoriteMovies-slice";
import { Link } from "react-router-dom";
import { apiConfig } from "../../api/api-config";
import FavoriteActions from "./FavoriteActions";
import CardContent from "./CardContent";
//? Firebase
import { remove, child } from "firebase/database";
import { dbRef } from "../../firebase/config";
import { toast } from "react-toastify";
//==================================================================
// MovieCard or => Poster
const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { items } = useSelector(selectFavoriteMedia);
  const { sendRequest: sendFavMovie, isLoading } = useHttp();
  const dispatch = useDispatch();

  const updateFavMovies = (data) => {
    const favoriteMovie = { ...movie, firebaseId: data.name };
    dispatch(TOGGLE_FAVORITE(favoriteMovie));

    toast.success(
      `${movie.title || movie.name} added successfully to favorites`,
      {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      }
    );
  };

  // Toggle Favorite Movie Handler
  const toggleFavoriteMovieHandler = async () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    const existingItem = items.find((item) => item.id === movie.id);

    if (!existingItem) {
      sendFavMovie(
        {
          url: "https://netflix-clone-61d73-default-rtdb.firebaseio.com/favorites.json",
          method: "POST",
          body: { ...movie, isFavorite: true },
          headers: { "Content-Type": "application/json" },
        },
        updateFavMovies
      );
    } else {
      const firebaseId = existingItem.firebaseId;

      remove(child(dbRef, `favorites/${firebaseId}`))
        .then(() => {
          dispatch(TOGGLE_FAVORITE(movie));
          toast.success(
            `${movie.title || movie.name} removed successfully from favorites`,
            {
              position: "top-center",
              autoClose: 3000,
              theme: "dark",
            }
          );
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  };

  const imageUrl = `${apiConfig.baseImageUrl}${movie.poster_path}`;
  const posterImage = { backgroundImage: `url(${imageUrl})` };

  useEffect(() => {
    if (items.length === 0 && !isFavorite) {
      return;
    }

    const itemIndex = items.findIndex((item) => item.id === movie.id);
    const existingItem = items[itemIndex];
    if (!existingItem) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }, [items, movie.id, isFavorite]);

  return (
    <div className="card">
      <Link to={`/${movie.media_type}/${movie.id}?details=cast`}>
        <div className="card_img" style={posterImage} />
      </Link>
      <FavoriteActions
        isFav={isFavorite}
        isLoading={isLoading}
        onToggleFavoriteMovie={toggleFavoriteMovieHandler}
      />
      <CardContent movie={movie} />
    </div>
  );
};

export default MovieCard;
