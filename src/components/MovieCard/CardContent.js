import React from "react";
import { Link } from "react-router-dom";
import Rating from "../UI/Rating";

const CardContent = ({ movie }) => {
  const releaseDate = movie.release_date && movie.release_date.substring(0, 4);

  return (
    <Link
      to={`/${movie.media_type}/${movie.id}?details=cast`}
      className="card_content"
    >
      <div className="info">
        <h4 className="title">{movie.title || movie.name}</h4>
        {releaseDate && <span className="release_date">{releaseDate}</span>}
        <Rating rating={movie.vote_average} />
      </div>
    </Link>
  );
};

export default React.memo(CardContent);
