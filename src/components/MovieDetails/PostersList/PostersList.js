import Container from "../../UI/Layouts/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import PosterItem from "./PosterItem";
//=======================================================
const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  870: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 5,
  },
};
//=======================================================
const PostersList = ({ posters }) => {
  let postersContent = <h3 className="text-center"> there are no posters!</h3>;

  if (posters.length > 0) {
    postersContent = (
      <Swiper
        breakpoints={breakpoints}
        grabCursor={true}
        className="posters-list"
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={"p-" + index + 1}>
            <PosterItem item={poster} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="posters">
      <Container>
        <h2 className="custom_title">posters</h2>
        {postersContent}
      </Container>
    </section>
  );
};

export default PostersList;
