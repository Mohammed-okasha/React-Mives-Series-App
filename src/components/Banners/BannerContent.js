import { apiConfig } from "../../api/api-config";
import { FaCalendar, FaClock } from "react-icons/fa";
import Rating from "../UI/Rating";

const BannerContent = ({ movie }) => {
  const date = movie.release_date
    ? movie.release_date.substring(0, 4)
    : movie.first_air_date
    ? movie.first_air_date.substring(0, 4)
    : "unknown";

  const runtime = movie.runtime
    ? (movie.runtime / 60).toFixed(1)
    : movie.number_of_seasons
    ? `${movie.number_of_seasons} seasons`
    : null;

  const genresList = movie.genres
    .reduce((values, genre) => {
      values.push(genre.name);
      return values;
    }, [])
    .map((genre) => (
      <li key={genre} className="genre_item">
        {genre}
      </li>
    ));

  return (
    <div className="banner_content">
      <img
        src={`${apiConfig.baseImageUrl}${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="poster"
      />
      <div className="details">
        <h1 className="title">{movie.title || movie.name}</h1>
        {movie.overview && <p className="description">{movie.overview}</p>}
        <div className="info">
          <div>
            <FaCalendar color="#f20000" />
            <span>{date}</span>
          </div>
          {runtime && (
            <div>
              <FaClock color="#f20000" />
              <span>{runtime}</span>
            </div>
          )}
          <Rating rating={movie.vote_average} />
        </div>
        <ul className="genres_list">{genresList}</ul>
      </div>
    </div>
  );
};

export default BannerContent;
