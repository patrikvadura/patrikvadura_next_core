'use client';
import React from 'react';
import data from '@/l-data/services.json';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
function Services2() {
  const swiperOptions = {
    modules: [Navigation],
    speed: 600,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-arrow-control .swiper-button-next',
      prevEl: '.swiper-arrow-control .swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      768: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 50,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1000: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: true,
      },
    },
  };
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Comprehensive <span className="fw-200">Services.</span>
              </span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="serv-swiper"
          // data-carousel="swiper"
          // data-loop="true"
          // data-space="30"
        >
          <Swiper
            id="content-carousel-container-unq-serv"
            className="swiper-container"
            // data-swiper="container"
            {...swiperOptions}
          >
            {data.slice(0, 4).map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="item-box radius-15">
                  <div className="icon mb-40 opacity-5">
                    <img src={item.img} alt="" />
                  </div>
                  <h5 className="mb-15">{item.title}</h5>
                  <p>{item.desc}</p>
                  <a href={item.link} className="rmore mt-30">
                    <span className="sub-title">Read More</span>
                    <img
                      src="/light/assets/imgs/arrow-right.png"
                      alt=""
                      className="icon-img-20 ml-5"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services2;
