import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  if (rating) {
    return (
      <div className="rating">
        <FaStar />
        <span>{rating.toFixed(1)}</span>
      </div>
    );
  }

  return null;
};

export default Rating;
