import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./PhotoGallerystyles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function PhotoGallary() {
  return (
    <div className="my-20" style={{}}>
      <div className="text-center">
        <span className=" flex justify-center text-xl md:text-2xl BerkshireSwash ">
          <img
            className="mr-2 w-5 md:w-10"
            src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/sub-title-vec.svg"
            alt=""
          />
          Photo Gallery
          <img
            className="ml-2 w-5 md:w-10"
            src="https://demo.egenslab.com/html/restho/preview/assets/images/icon/sub-title-vec.svg"
            alt=""
          />
        </span>
        <h1 className="text-2xl md:text-4xl font-serif font-bold">
          Our Special Photo Gallery
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/zNX9cct/2col-gallery-big-06.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/3B8GZJQ/2col-gallery-big-02.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Vvybqsv/h2-blog1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/ZWR1HfQ/regular-menu-bg-232aaad2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/C7pf72S/recent-post-img-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/G7Pm1z1/blog-st-02.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0Fggm9v/h2-gallery-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SyvtwZN/h2-gallery-6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/L6LWkZP/best-restaurants-soleil.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/m8ydy3h/dining-room.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="
https://i.ibb.co/1vHFFTV/TOO-restaurant-Panoramique-vue-Paris-Seine-Tour-Eiffel-2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
