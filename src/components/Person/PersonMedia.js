import { useState } from "react";
import Container from "../UI/Layouts/Container";
import GridLayout from "../UI/Layouts/GridLayout";
import SectionTitle from "../UI/SectionTitle";
import MovieCard from "../MovieCard/MovieCard";
import Button from "../UI//Buttons/Button";
//======================================================================
const PersonMedia = ({ mediaList }) => {
  const [visibleCards, setVisibleCards] = useState(10);

  // Load More Handler
  const loadMoreHandler = async () => {
    setVisibleCards((prevState) => prevState + 10);
  };

  // Mo More Media => All is Loaded
  const noMoreMedia = visibleCards >= mediaList.length;

  return (
    <section className="person_media">
      <Container>
        <SectionTitle title="media" />
        <GridLayout>
          {mediaList.slice(0, visibleCards).map((item) => (
            <MovieCard key={item.credit_id} movie={item} />
          ))}
        </GridLayout>
        <div className="text-center">
          <Button
            onClick={loadMoreHandler}
            disabled={noMoreMedia}
            title={noMoreMedia ? "No More Media" : null}
          >
            load more
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PersonMedia;
