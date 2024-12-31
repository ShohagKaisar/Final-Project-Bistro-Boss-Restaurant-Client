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
import SectionTittle from '../../../Components/SectionTittle/SectionTittle';

const Category = () => {
  return (
    <section>
      <SectionTittle heading={"Order Online"}
      subHeading={"From 11.00am to 10.00pm"}></SectionTittle>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-gray-600 shadow-2xl'>Salad</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-gray-600 shadow-2xl'>Pizza</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-gray-600 shadow-2xl'>Soup</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-gray-600 shadow-2xl'>Desert</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
          <h3 className='text-3xl uppercase text-center -mt-16 text-gray-600 shadow-2xl'>Salad</h3></SwiperSlide>
      </Swiper>
</section>
  );
};

export default Category;