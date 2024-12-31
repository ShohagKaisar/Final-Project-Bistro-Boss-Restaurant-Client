import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// import Picture
import slide1 from "../../../assets/home/Slide/slide1.jpg";
import slide2 from "../../../assets/home/Slide/slide2.jpg";
import slide3 from "../../../assets/home/Slide/slide3.jpg";
import slide4 from "../../../assets/home/Slide/slide4.jpg";
import slide5 from "../../../assets/home/Slide/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default Category;