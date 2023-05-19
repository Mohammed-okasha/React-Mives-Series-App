import { Link } from "react-router-dom";
import Rating from "../UI/Rating";
import MiniButton from "../UI/Buttons/MiniButton";
import Spinner from "../../components/UI/Loaders/Spinner";
import { FaTrash } from "react-icons/fa";

const FavItemContent = ({ item, onOpenModal, loading }) => {
  const releaseDate = item.release_date ? item.release_date.slice(0, 4) : null;

  return (
    <>
      <div className="content">
        <Link
          to={`/${item.media_type}/${item.id}?details=cast`}
          className="title_link"
        >
          <h3>{item.title || item.name}</h3>
        </Link>
        <p className="description">{item.overview}</p>
        <div className="info">
          {item.release_date && <span>{releaseDate}</span>}
          <Rating rating={item.vote_average} />
        </div>
      </div>
      <MiniButton onClick={onOpenModal}>
        {!loading && <FaTrash />}
        {loading && <Spinner />}
      </MiniButton>
    </>
  );
};

export default FavItemContent;
