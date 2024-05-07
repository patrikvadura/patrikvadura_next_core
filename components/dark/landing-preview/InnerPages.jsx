'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
function InnerPages() {
  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: false,
    speed: 1000,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
      },
    },
  };

  return (
    <section className="pages section-padding pb-0" data-scroll-index="1">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h6 className="sub-title mb-15">
                <span className="main-color">50+ Inner Pages</span>
                <span className="opacity-7">(Dark & Light)</span>
              </h6>
              <h2 className="fw-600">
                Explore some of <br />
                <span className="spc-font">creative collection</span> inner
                pages
              </h2>
            </div>
            <div className="col-lg-5">
              <div className="text pb-15">
                <p>
                  Enjoy a versatile collection of ready-made pages for various
                  purposes. Create a unique and eye-catching website easily!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper3">
          <Swiper
            id="content-carousel-container-unq-clients"
            className="swiper-container"
            // data-swiper="container swiper3"
            {...swiperOptions}
            autoPlay
          >
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-about" target="_blank">
                  <img src="landing-preview/img/pages/1.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-about2" target="_blank">
                  <img src="landing-preview/img/pages/2.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-about3" target="_blank">
                  <img src="landing-preview/img/pages/3.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-services" target="_blank">
                  <img src="landing-preview/img/pages/4.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-services2" target="_blank">
                  <img src="landing-preview/img/pages/5.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-services-details" target="_blank">
                  <img src="landing-preview/img/pages/6.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-contact" target="_blank">
                  <img src="landing-preview/img/pages/7.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-contact2" target="_blank">
                  <img src="landing-preview/img/pages/8.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-contact3" target="_blank">
                  <img src="landing-preview/img/pages/9.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-team" target="_blank">
                  <img src="landing-preview/img/pages/10.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-team-single" target="_blank">
                  <img src="landing-preview/img/pages/11.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <a href="/dark/page-FAQS" target="_blank">
                  <img src="landing-preview/img/pages/12.jpg" alt="" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default InnerPages;
