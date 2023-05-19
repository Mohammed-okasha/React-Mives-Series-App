import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FavItemContent from "./FavItemContent";
import ConfirmModal from "./ConfirmModal";
import { REMOVE_FAV_ITEM } from "../../store/slices/favoriteMovies-slice";
import { toast } from "react-toastify";
//? Firebase
import { remove, child } from "firebase/database";
import { dbRef } from "../../firebase/config";
import { apiConfig } from "../../api/api-config";
const { baseImageUrl } = apiConfig;
//==========================================================================
const FavoriteItem = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openConfirmHandler = () => setConfirmIsOpen(true);
  const closeConfirmHandler = () => setConfirmIsOpen(false);

  const removeItemHandler = async () => {
    setIsLoading(true);
    await remove(child(dbRef, `favorites/${item.firebaseId}`))
      .then(() => {
        dispatch(REMOVE_FAV_ITEM(item.id));
        toast.success(
          `${item.title || item.name} removed successfully from favorites`,
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

    setIsLoading(false);
  };

  const imageUrl = `${baseImageUrl}${item.poster_path}`;
  const posterImage = { backgroundImage: `url(${imageUrl})` };
  const confirmMsg = `are you sure you want remove ${
    item.title || item.name
  } from favorites?`;

  return (
    <>
      <li className="favorite_item">
        <Link
          to={`/${item.media_type}/${item.id}?details=cast`}
          className="card_link"
        >
          <div className="card_img" style={posterImage} />
        </Link>
        <FavItemContent item={item} onOpenModal={openConfirmHandler} />
      </li>
      {confirmIsOpen && (
        <ConfirmModal
          massage={confirmMsg}
          btnLabel="remove"
          loading={isLoading}
          onCloseConfirm={closeConfirmHandler}
          onRemove={removeItemHandler}
        />
      )}
    </>
  );
};

export default FavoriteItem;
