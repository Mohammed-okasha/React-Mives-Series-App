import ProductionCompanies from "./ProductionCompanies";

const MoreDetails = (props) => {
  const { status, original_language, budget, revenue, production_companies } =
    props.moreDetails;

  return (
    <div className="more_details">
      <div className="detail_item">
        <h4 className="custom_title">status</h4>
        <p className="text">{status}</p>
      </div>
      <div className="detail_item">
        <h4 className="custom_title">original language</h4>
        <p className="text">{original_language}</p>
      </div>
      <div className="detail_item">
        <h4 className="custom_title">budget</h4>
        <p className="text">{budget ? `$${budget}` : "unknown"}</p>
      </div>
      <div className="detail_item">
        <h4 className="custom_title">revenue</h4>
        <p className="text">{revenue ? `$${revenue}` : "unknown"}</p>
      </div>
      <ProductionCompanies companies={production_companies} />
    </div>
  );
};

export default MoreDetails;
