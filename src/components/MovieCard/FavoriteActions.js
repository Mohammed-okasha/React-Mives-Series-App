import React from "react";
import { BiPlus, BiCheck } from "react-icons/bi";
import Spinner from "../UI/Loaders/Spinner";

const FavoriteActions = (props) => {
  const { isFav, onToggleFavoriteMovie, isLoading } = props;
  const btnClasses = `add_btn ${isFav ? "success" : ""}`;

  return (
    <div className="favorite_actions">
      <button className={btnClasses} onClick={onToggleFavoriteMovie}>
        {!isFav && !isLoading && <BiPlus />}
        {isFav && !isLoading && <BiCheck />}
        {isLoading && <Spinner />}
      </button>
    </div>
  );
};

export default FavoriteActions;
