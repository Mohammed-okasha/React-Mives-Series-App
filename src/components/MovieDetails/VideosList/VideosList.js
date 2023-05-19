import Container from "../../UI/Layouts/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";
import VideoItem from "./VideoItem";
//=======================================================
const VideosList = ({ videos }) => {
  let videosContent = <h3 className="text-center"> there are no videos!</h3>;

  if (videos.length > 0) {
    videosContent = (
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        className="videos-list"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <VideoItem video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="videos">
      <Container>
        <h2 className="custom_title">videos</h2>
        {videosContent}
      </Container>
    </section>
  );
};

export default VideosList;
