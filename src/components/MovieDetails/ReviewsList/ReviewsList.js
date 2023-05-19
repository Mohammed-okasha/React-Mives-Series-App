import ReviewItem from "./ReviewItem";

const ReviewsList = (props) => {
  let reviewsContent = <h3 className="text-center">there are no reviews!</h3>;

  if (props.reviews.length > 0) {
    reviewsContent = props.reviews.map((review) => (
      <ReviewItem key={review.id} review={review} />
    ));
  }

  return <div className="reviews">{reviewsContent}</div>;
};

export default ReviewsList;
