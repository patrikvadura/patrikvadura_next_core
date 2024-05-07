'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clients() {
  const swiperOptions = {
    speed: 500,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 640px
      500: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      700: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1000: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  };
  return (
    <section className="clients-carso section-padding pt-0">
      <div className="container">
        <div className="sec-bottom mb-100">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              More than <span className="fw-600">200+ companies</span>
              trusted us worldwide
            </h6>
          </div>
        </div>
        <div
          className="swiper5"
          data-carousel="swiper"
          data-items="5"
          data-loop="true"
          data-space="40"
        >
          <Swiper
            id="content-carousel-container-unq-clients"
            className="swiper-container"
            data-swiper="container"
            loop={true}
            {...swiperOptions}
          >
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/light/assets/imgs/brands/b1.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/light/assets/imgs/brands/b2.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/light/assets/imgs/brands/b3.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/light/assets/imgs/brands/b4.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/light/assets/imgs/brands/b6.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients;
