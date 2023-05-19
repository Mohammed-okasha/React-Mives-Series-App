// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";
//=======================================================
const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1000: {
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 5,
  },
};
//=======================================================
function MoviesList({ movies }) {
  const cards = movies.map((movie) => {
    return (
      <SwiperSlide key={movie.id}>
        <MovieCard movie={movie} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      loop={true}
      grabCursor={true}
      breakpoints={breakpoints}
      className="movies-slider"
    >
      {cards}
    </Swiper>
  );
}

export default MoviesList;
