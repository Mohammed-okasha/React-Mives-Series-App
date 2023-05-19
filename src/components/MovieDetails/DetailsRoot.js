import { Link, useSearchParams } from "react-router-dom";
import Container from "../UI/Layouts/Container";
import CastList from "./CastList/CastList";
import ReviewsList from "./ReviewsList/ReviewsList";
import MoreDetails from "./MoreDetails";
//=========================================================
const tabsList = ["cast", "reviews", "more"];
//=========================================================
const DetailsRoot = (props) => {
  const [searchParams] = useSearchParams();
  const detailsQuery = searchParams.get("details");
  const castIsActive = searchParams.get("details") === "cast";
  const reviewsIsActive = searchParams.get("details") === "reviews";
  const moreIsActive = searchParams.get("details") === "more";

  const detailsTabs = (
    <ul className="details_tabs">
      {tabsList.map((tab) => (
        <li key={tab} className="tab_item">
          <Link
            to={`?details=${tab}`}
            className={`tab_link ${tab === detailsQuery ? "active" : ""}`}
          >
            {tab}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="details_root">
      <Container>
        {detailsTabs}
        {castIsActive && <CastList castList={props.cast} />}
        {reviewsIsActive && <ReviewsList reviews={props.reviews.results} />}
        {moreIsActive && <MoreDetails moreDetails={props.moreDetails} />}
      </Container>
    </section>
  );
};

export default DetailsRoot;
