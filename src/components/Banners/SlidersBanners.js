// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeroBanner from "./HeroBanner";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
//================================================================
const SlidersBanners = ({ movies }) => {
  const banners = movies.slice(15, 19);

  return (
    <section className="sliders_banners">
      <Swiper
        direction={"vertical"}
        grabCursor={true}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="slidersBanners"
      >
        {banners.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <HeroBanner movie={banner} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SlidersBanners;
