'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  const swiperOptions = {
    modules: [Navigation, Parallax, Pagination],

    spaceBetween: 30,
    speed: 600,
    navigation: {
      nextEl: '.slider-contro .swiper-button-next',
      prevEl: '.slider-contro .swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  };
  function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll('[data-background]');

    if (backgroudImages.length > 0) {
      backgroudImages.forEach((element) => {
        let image = element.dataset.background;
        element.style.backgroundImage = `url('${image}')`;
      });
    }
  }
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div className="header slider slider-prlx">
      {/* <div className="swiper-container parallax-slider"> */}
      <Swiper
        effect="Parallax"
        className="swiper-container parallax-slider"
        {...swiperOptions}
      >
        <SwiperSlide>
          <div
            className="bg-img valign"
            data-background="/dark/assets/imgs/header/full/1.jpg"
            data-overlay-dark="4"
          >
            <div className="container">
              <div className="caption text-center">
                <h2 className="mb-30" data-swiper-parallax="-2000">
                  We Create
                </h2>

                <h1>
                  <span data-swiper-parallax="-1000">Awoseme Design</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-img valign"
            data-background="/dark/assets/imgs/header/full/3.jpg"
            data-overlay-dark="4"
          >
            <div className="container">
              <div className="caption text-center">
                <h2 className="mb-30" data-swiper-parallax="-2000">
                  We Create Impactful
                </h2>
                <h1>
                  <span data-swiper-parallax="-1000">Digital Experiences</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-img valign"
            data-background="/dark/assets/imgs/header/full/4.jpg"
            data-overlay-dark="4"
          >
            <div className="container">
              <div className="caption text-center">
                <h2 className="mb-30" data-swiper-parallax="-2000">
                  Elevate your
                </h2>
                <h1>
                  <span data-swiper-parallax="-1000">Brand & Fuel Growth</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
      <div className="slider-contro main-bg">
        <div className="swiper-button-prev swiper-nav-ctrl cursor-pointer">
          <div>
            <span>Prev</span>
          </div>
        </div>
        <div className="ml-30 mr-30">
          <span>/</span>
        </div>
        <div className="swiper-button-next swiper-nav-ctrl cursor-pointer">
          <div>
            <span>Next</span>
          </div>
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
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Header;
