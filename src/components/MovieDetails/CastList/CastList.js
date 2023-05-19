import Sliders from "../../UI/Sliders/Sliders";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Actor from "./Actor";
//=======================================================
const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1000: {
    slidesPerView: 5,
  },
  1200: {
    slidesPerView: 6,
  },
};
//=======================================================
const CastList = (props) => {
  let castContent = <h3 className="text-center">unknown cast!</h3>;

  if (props.castList.length > 0) {
    castContent = (
      <div className="cast_list">
        <Swiper
          spaceBetween={15}
          loop={true}
          grabCursor={true}
          breakpoints={breakpoints}
          className="cast-list"
        >
          {props.castList.map((actor) => (
            <SwiperSlide key={actor.id}>
              <Actor actor={actor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return castContent;
};

export default CastList;
