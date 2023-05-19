import { apiConfig } from "../../api/api-config";
import Container from "../UI/Layouts/Container";

const PersonDetails = ({ person }) => {
  const image = {
    backgroundImage: `url(${apiConfig.baseImageUrl}${person.profile_path})`,
  };

  const birthday = person.birthday
    ? person.birthday.substring(0, 4)
    : "birthday unknown";

  return (
    <section className="person_detail">
      <Container>
        <div className="row">
          <div className="image">
            <div className="card_img" style={image} />
          </div>
          <div className="info">
            <h2 className="title">
              {person.name} ({birthday})
            </h2>
            <p className="description">{person.biography}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PersonDetails;
