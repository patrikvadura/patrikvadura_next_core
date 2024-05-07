'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/data/testimonials.json';

function Testimonials() {
  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      800: {
        slidesPerView: 2,
      },
      220: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <section className="testim-crev section-padding sub-bg radius-30 mt-15">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <h6 className="sub-title main-color mb-15">Testimonials</h6>
          <h2>What People Say?</h2>

          <div className="fixed-head main-bg">
            <h5 className="stroke">Clients</h5>

            <div className="shap-right-top">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#1a1a1a"
                ></path>
              </svg>
            </div>
            <div className="shap-left-bottom">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#1a1a1a"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper2"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            {data.slice(0, 3).map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item sub-bg2">
                  <div className="content">
                    <div className="rate-stars fz-14 sub-bg">
                      <span className="rate main-color">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                      <div className="shap-left-top">
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-11 h-11"
                        >
                          <path
                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                            fill="#1d1d1d"
                          ></path>
                        </svg>
                      </div>
                      <div className="shap-right-bottom">
                        <svg
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-11 h-11"
                        >
                          <path
                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                            fill="#1d1d1d"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="256.721"
                      height="208.227"
                      viewBox="0 0 256.721 208.227"
                      className="qout-svg"
                    >
                      <path
                        data-name="Path"
                        d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                        transform="translate(121.55 640.568)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        opacity="0.322"
                      ></path>
                    </svg>
                    <div className="text">
                      <span className="tag sub-title mb-15">
                        Design Quality
                      </span>
                      <p>{item.desc}</p>
                    </div>
                    <div className="info mt-40">
                      <div className="img-curv sub-bg">
                        <div className="img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="shap-left-top">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#1d1d1d"
                            ></path>
                          </svg>
                        </div>
                        <div className="shap-right-bottom">
                          <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-11 h-11"
                          >
                            <path
                              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                              fill="#1d1d1d"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-30">
                        <h6>{item.name}</h6>
                        <span className="sub-title main-color">
                          {item.subName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
