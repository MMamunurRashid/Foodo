import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';

export default function HomeFoodCarousel() {
  return (
    <div className='my-20 shadow-zinc-500 shadow-2xl' style={{
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSDrlVmOUCcDbVUlwlPQh4Gux9qtdB31j2F5Kj41-2BFpSXTssZGW0HAPCB28j7MCIIA&usqp=CAU")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: "5px",
      width: '100%',
      height: 'auto',
    }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/hg1JZ5j/h2-regular-items13.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Kb10S07/h2-regular-items12.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Lx2XNVV/h2-regular-items11.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/7Yt2H1b/h2-banner-img222.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/30Kfx19/h2-banner-img333.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/wB3VrWC/h2-banner-img33.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/S71yhpS/h2-banner-img11.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Hh9FGYk/h2-banner-img444.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/BsRD55P/h2-banner-img1.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
