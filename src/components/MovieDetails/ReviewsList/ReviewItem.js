import { useState } from "react";

const ReviewItem = ({ review }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadHandler = () => setReadMore((prevState) => !prevState);

  const reviewDate = new Date().getFullYear(review.created_at);
  const desContent = readMore
    ? review.content
    : review.content.substring(0, 200);

  return (
    <div className="author">
      <div className="img">
        <span>{review.author[0]}</span>
      </div>
      <div className="review_details">
        <span className="name">{review.author}</span>
        <div className="date">
          <span>{reviewDate}</span>
        </div>
        <p className="description">
          {desContent} ...{" "}
          <button className="read_btn" onClick={toggleReadHandler}>
            {readMore ? "read less" : "read more"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;
