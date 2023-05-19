import FavoriteItem from "./FavoriteItem";

const FavoriteList = ({ favoriteList }) => {
  if (favoriteList.length > 0) {
    return (
      <ul className="favorite_list">
        {favoriteList.map((item) => (
          <FavoriteItem key={item.id} item={item} />
        ))}
      </ul>
    );
  } else {
    return <h2 className="text-center">there are no items</h2>;
  }
};

export default FavoriteList;
