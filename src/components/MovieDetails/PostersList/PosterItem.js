import { apiConfig } from "../../../api/api-config";

const PosterItem = ({ item }) => {
  return (
    <div className="poster_item">
      <img src={`${apiConfig.baseImageUrl}${item.file_path}`} alt="poster" />
    </div>
  );
};

export default PosterItem;
