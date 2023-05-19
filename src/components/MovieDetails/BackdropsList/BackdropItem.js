import { apiConfig } from "../../../api/api-config";

const BackdropItem = ({ item }) => {
  return (
    <div className="backdrop_item">
      <img src={`${apiConfig.baseImageUrl}${item.file_path}`} alt="backdrop" />
    </div>
  );
};

export default BackdropItem;
