'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import data from '@/l-data/portfolios/works1';
function Portfolio() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 500,
    navigation: {
      nextEl: '.swiper-arrow-control .swiper-button-next',
      prevEl: '.swiper-arrow-control .swiper-button-prev',
    },
  };
  return (
    <section className="portfolio-carsouel section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              Our featured <span className="fw-200">projects</span>
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
        <div className="work-swiper-auto">
          <Swiper
            id="content-carousel-container-unq-work"
            className="swiper-container"
            data-swiper="container"
            {...swiperOptions}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom">
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.subTitle}</p>
                    </div>
                    <div className="ml-auto">
                      <a href={item.link} className="rmore">
                        <img
                          src="/light/assets/imgs/arrow-right.png"
                          alt=""
                          className="icon-img-20"
                        />
                      </a>
                    </div>
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

export default Portfolio;
