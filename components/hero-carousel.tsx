"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HeroCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={false}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/hero/hero-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero/hero-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero/hero-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero/hero-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
