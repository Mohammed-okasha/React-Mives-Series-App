import Container from "../../UI/Layouts/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";
import BackdropItem from "./BackdropItem";
//=======================================================
const BackdropsList = ({ backdrops }) => {
  let backdropsContent = (
    <h3 className="text-center"> there are no backdrops!</h3>
  );

  if (backdrops.length > 0) {
    backdropsContent = (
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        className="backdrops-list"
      >
        {backdrops.map((backdrop, index) => (
          <SwiperSlide key={index}>
            <BackdropItem item={backdrop} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="backdrops">
      <Container>
        <h2 className="custom_title">backdrops</h2>
        {backdropsContent}
      </Container>
    </section>
  );
};

export default BackdropsList;
