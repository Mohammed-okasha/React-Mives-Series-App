import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteMedia } from "../../store/slices/favoriteMovies-slice";
import { NavLink } from "react-router-dom";
import { BiSearch, BiHeart, BiUser } from "react-icons/bi";

const HeaderButtons = (props) => {
  const { items } = useSelector(selectFavoriteMedia);

  const btnContent = props.isLoggedIn ? (
    <span className="userName">{props.userName}</span>
  ) : (
    <BiUser />
  );

  return (
    <div className="header_buttons">
      <NavLink
        to="search"
        className={({ isActive }) =>
          `btn ${isActive ? "active_tab" : undefined}`
        }
        title="search"
        end
      >
        <BiSearch />
      </NavLink>
      <button
        className={`btn ${props.isLoggedIn ? "active" : ""}`}
        title="account"
        onClick={props.onOpenAuthModal}
      >
        {btnContent}
      </button>
      <NavLink
        to="favorites"
        className={({ isActive }) =>
          `btn ${isActive ? "active_tab" : undefined}`
        }
        title="favorite"
        end
      >
        <BiHeart />
        <span className="total_fav_movies">{items.length}</span>
      </NavLink>
    </div>
  );
};

export default React.memo(HeaderButtons);
