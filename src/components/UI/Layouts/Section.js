import Container from "./Container";
import SectionTitle from "../SectionTitle";
import MoviesList from "../../MoviesList/MoviesList";

const Section = ({ title, movies }) => {
  return (
    <section>
      <Container>
        <SectionTitle title={title} />
        <MoviesList movies={movies} />
      </Container>
    </section>
  );
};

export default Section;
