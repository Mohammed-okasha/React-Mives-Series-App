import { apiConfig } from "../../api/api-config";
import Container from "../UI/Layouts/Container";
import BannerContent from "./BannerContent";
//===============================================================================
const DetailsBanner = ({ movie }) => {
  const backdropClasses = !movie.backdrop_path
    ? "details_banner empty"
    : "details_banner";

  const backdrop = {
    backgroundImage: `url(${apiConfig.baseImageUrl}${movie.backdrop_path})`,
  };

  return (
    <section className={backdropClasses} style={backdrop}>
      <div className="banner_wrapper">
        <Container>
          <BannerContent movie={movie} />
        </Container>
      </div>
    </section>
  );
};

export default DetailsBanner;
