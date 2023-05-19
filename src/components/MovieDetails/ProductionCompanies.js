import { apiConfig } from "../../api/api-config";

const ProductionCompanies = ({ companies }) => {
  if (companies.length > 0) {
    return (
      <div className="detail_item">
        <h4 className="custom_title">production companies</h4>
        <ul className="companies_list">
          {companies.map((company) => (
            <li key={company.id} className="company">
              <div className="info">
                <img
                  src={`${apiConfig.baseImageUrl}${company.logo_path}`}
                  alt={company.name}
                  className="logo"
                />
                <div className="name">{company.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default ProductionCompanies;
