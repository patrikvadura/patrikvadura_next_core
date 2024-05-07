'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
function Testimonials() {
  const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 1000,
    loop: true,
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
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
  };

  return (
    <section
      style={{ zIndex: 10, position: 'relative', backgroundColor: '#1d1d1d' }}
      className="testim-crev section-padding"
    >
      <div className="container">
        <div
          className="testim-swiper2 testim2"
          // data-carousel="swiper"
          // data-loop="true"
          // data-space="30"
        >
          <Swiper
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container swiper2"
            loop={true}
            {...swiperOptions}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="item bord-box radius-15">
                  <div className="content">
                    <div className="text">
                      <span className="tag sub-title mb-30 main-color">
                        Design Quality
                      </span>
                      <p className="fz-16">
                        I have been hiring people in this space for a number of
                        years and I have never seen this level of
                        professionalism. It really feels like you are working
                        with a team that can get the job done.
                      </p>
                    </div>
                    <div className="info mt-40">
                      <div className="img-curv">
                        <div className="img">
                          <img
                            src="landing-preview/img/envato_logo.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="ml-20">
                        <h6>charlie4282</h6>
                        <span className="sub-title opacity-7">
                          Envato Client
                        </span>
                      </div>
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256.721"
                          height="208.227"
                          viewBox="0 0 256.721 208.227"
                          className="qout-svg"
                        >
                          <path
                            d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                            transform="translate(121.55 640.568)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1"
                            opacity="0.322"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bord-box radius-15">
                  <div className="content">
                    <div className="text">
                      <span className="tag sub-title mb-30 main-color">
                        Customizability
                      </span>
                      <p className="fz-16">
                        This template has great customization ability and
                        versatile for any insudtry or business. Clean and simple
                        layouts with numerous options to customize to your
                        liking.
                      </p>
                    </div>
                    <div className="info mt-40">
                      <div className="img-curv">
                        <div className="img">
                          <img
                            src="landing-preview/img/envato_logo.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="ml-20">
                        <h6>olsonwinthrop</h6>
                        <span className="sub-title opacity-7">
                          Envato Client
                        </span>
                      </div>
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256.721"
                          height="208.227"
                          viewBox="0 0 256.721 208.227"
                          className="qout-svg"
                        >
                          <path
                            d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                            transform="translate(121.55 640.568)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1"
                            opacity="0.322"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bord-box radius-15">
                  <div className="content">
                    <div className="text">
                      <span className="tag sub-title mb-30 main-color">
                        Design Quality
                      </span>
                      <p className="fz-16">
                        I have been hiring people in this space for a number of
                        years and I have never seen this level of
                        professionalism. It really feels like you are working
                        with a team that can get the job done.
                      </p>
                    </div>
                    <div className="info mt-40">
                      <div className="img-curv">
                        <div className="img">
                          <img
                            src="landing-preview/img/envato_logo.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="ml-20">
                        <h6>charlie4282</h6>
                        <span className="sub-title opacity-7">
                          Envato Client
                        </span>
                      </div>
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256.721"
                          height="208.227"
                          viewBox="0 0 256.721 208.227"
                          className="qout-svg"
                        >
                          <path
                            d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                            transform="translate(121.55 640.568)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1"
                            opacity="0.322"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bord-box radius-15">
                  <div className="content">
                    <div className="text">
                      <span className="tag sub-title mb-30 main-color">
                        Customizability
                      </span>
                      <p className="fz-16">
                        This template has great customization ability and
                        versatile for any insudtry or business. Clean and simple
                        layouts with numerous options to customize to your
                        liking.
                      </p>
                    </div>
                    <div className="info mt-40">
                      <div className="img-curv">
                        <div className="img">
                          <img
                            src="landing-preview/img/envato_logo.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="ml-20">
                        <h6>olsonwinthrop</h6>
                        <span className="sub-title opacity-7">
                          Envato Client
                        </span>
                      </div>
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256.721"
                          height="208.227"
                          viewBox="0 0 256.721 208.227"
                          className="qout-svg"
                        >
                          <path
                            d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                            transform="translate(121.55 640.568)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1"
                            opacity="0.322"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
