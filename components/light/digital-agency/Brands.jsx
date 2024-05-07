'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Brands() {
  const swiperOptions = {
    speed: 600,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    centeredSlides: false,
    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
  };
  return (
    <div className="brands bord-thin-bottom">
      <div className="container">
        <div
          className="brand-swiper swiper5"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            id="content-carousel-container-unq-brand"
            className="swiper-container"
            data-swiper="container"
            {...swiperOptions}
          >
            <SwiperSlide>
              <div className="item">
                <a href="#0">
                  <img src="/light/assets/imgs/brands/01.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="#0">
                  <img src="/light/assets/imgs/brands/02.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="#0">
                  <img src="/light/assets/imgs/brands/03.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="#0">
                  <img src="/light/assets/imgs/brands/04.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="#0">
                  <img src="/light/assets/imgs/brands/05.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="#0">
                  <img src="/light/assets/imgs/brands/06.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="#0">
                  <img src="/light/assets/imgs/brands/05.png" alt="" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Brands;
