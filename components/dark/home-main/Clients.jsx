'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/data/clients';
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
    <section className="clients-carso section-padding pt-0 sub-bg">
      <div className="container">
        <div className="sec-bottom mb-100">
          <div className="sub-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              More than <span className="fw-600">200+ companies</span>
              trusted us worldwide
            </h6>
          </div>
        </div>
        <div className="swiper5" data-carousel="swiper">
          <Swiper
            id="content-carousel-container-unq-clients"
            className="swiper-container"
            data-swiper="container"
            loop={true}
            {...swiperOptions}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item">
                  <div className="img icon-img-100">
                    <img src={item} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients;
