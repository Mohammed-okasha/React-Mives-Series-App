// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
//=======================================================
const Sliders = (props) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      autoplay={props.autoplay}
      spaceBetween={15}
      navigation
      pagination
      loop={true}
      grabCursor={true}
      breakpoints={props.breakpoints}
      className="sliders-list"
    >
      {props.children}
    </Swiper>
  );
};

export default Sliders;
