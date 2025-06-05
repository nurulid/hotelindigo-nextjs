"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = ({ slides, className = "", ...swiperProps }) => {
  return (
    <>
      <style>
        {`
      .swiper,
      .swiper-wrapper {
        z-index: auto;
      }

      .swiper-button-next,
      .swiper-button-prev {
        color: #000;
        z-index: auto;
        width: 50px;
        height: 50px;
        background-color: #6b6b6bab;
        padding: 4px;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
      }

      .swiper-button-next::after,
      .swiper-button-prev::after {
        font-size: 34px;
        color: #fff;
      }
    `}
      </style>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className={className}
        {...swiperProps}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
