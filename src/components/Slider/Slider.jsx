import "./Slider.css";
import "swiper/css";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Slider() {
  return (
    <div className="my-4 slider__container">
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        loop={true}
      >
        <SwiperSlide>
          <img
            src="../../../public/images/1.jpg"
            alt=""
            className="carousel__img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../public/images/2.jpg"
            alt=""
            className="carousel__img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../public/images/3.jpg"
            alt=""
            className="carousel__img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../public/images/4.jpg"
            alt=""
            className="carousel__img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
