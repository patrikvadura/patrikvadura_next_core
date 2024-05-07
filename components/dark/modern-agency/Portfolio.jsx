'use client';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/data/portfolios/works3.json';
function Portfolio() {
  const swiperOptions = {
    modules: [Navigation],
    speed: 1000,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-arrow-control .swiper-button-next',
      prevEl: '.swiper-arrow-control .swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      768: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  };
  return (
    <section className="work-carsouel section-padding position-re o-hidden">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              Featured <span className="fw-200">projects</span>
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
      </div>
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12">
            <div className="work-crus work-crus5 out">
              <Swiper
                id="content-carousel-container-unq-w"
                className="swiper-container"
                data-swiper="container"
                {...swiperOptions}
              >
                {data.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item">
                      <div className="img">
                        <img src={item.img} alt="" />
                        <div className="cont">
                          <span className="mb-5">{item.title}</span>
                          <h6 className="fz-18">{item.subTitle}</h6>
                        </div>
                        <a href={item.link} className="plink"></a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
