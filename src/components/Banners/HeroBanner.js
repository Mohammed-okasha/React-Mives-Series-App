import { Link } from "react-router-dom";
import { apiConfig } from "../../api/api-config";
import Container from "../UI/Layouts/Container";
import { FaCalendar } from "react-icons/fa";

import Rating from "../UI/Rating";
//==============================================================
const HeroBanner = ({ movie }) => {
  const date = movie.release_date || movie.first_air_date;

  return (
    <section className="banner hero_banner">
      <img
        src={`${apiConfig.baseImageUrl}${
          movie.backdrop_path || movie.poster_path
        }`}
        alt={movie.title}
        loading="lazy"
        className="banner_backdrop"
      />
      <div className="banner_wrapper">
        <Container>
          <div className="banner_content">
            <h1 className="title">{movie.title || movie.name}</h1>
            <div className="info">
              <div>
                <FaCalendar color="#f20000" />
                <span>{date.substring(0, 4)}</span>
              </div>
              <Rating rating={movie.vote_average} />
            </div>
            <Link
              to={`${movie.media_type}/${movie.id}?details=cast`}
              className="watch_link"
            >
              watch now
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
