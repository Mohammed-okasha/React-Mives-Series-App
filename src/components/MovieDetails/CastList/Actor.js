import { Link } from "react-router-dom";
import { apiConfig } from "../../../api/api-config";

const Actor = ({ actor }) => {
  const actorStyle = {
    backgroundImage: `url(${apiConfig.baseImageUrl}${actor.profile_path})`,
  };

  return (
    <Link
      to={`/person/${actor.id}`}
      className="actor card_img"
      style={actorStyle}
    >
      <div className="name">
        <h5>{actor.name}</h5>
      </div>
    </Link>
  );
};

export default Actor;
