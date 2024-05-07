'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';

import data from '@/data/portfolios/worksfull.json';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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

    // Cleanup function
    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [galleryImg, setGalleryImg] = useState(null);
  const [galleryText, setGalleryText] = useState(null);

  const swiperGalleryImageOptions = {
    modules: [Navigation, Autoplay, Keyboard, Mousewheel, Pagination],
    onSwiper: function (swiper) {
      setGalleryImg(swiper);
    },
    spaceBetween: 80,
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    loopedSlides: 4,
    mousewheel: true,
    speed: 1500,
    navigation: {
      nextEl: '.carousel-slider .swiper-controls .swiper-button-next',
      prevEl: '.carousel-slider .swiper-controls .swiper-button-prev',
    },
    pagination: {
      el: '.carousel-slider .swiper-pagination',
      clickable: true,
      renderBullet: function (_, className) {
        return (
          '<span class="' +
          className +
          '">' +
          '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
          '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
          'stroke-opacity="1" stroke-width="1px"></circle>' +
          '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
          '</svg></span>'
        );
      },
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  };

  const swiperGalleryTextOptions = {
    modules: [Mousewheel],
    onSwiper: function (swiper) {
      setGalleryText(swiper);
    },
    spaceBetween: 30,
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    loopedSlides: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    mousewheel: true,
    speed: 1500,
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    if (galleryImg && galleryText) {
      galleryImg.on('slideChangeTransitionStart', function () {
        galleryText.slideTo(galleryImg.activeIndex);
      });
      galleryText.on('transitionStart', function () {
        galleryImg.slideTo(galleryText.activeIndex);
      });
    }
  }, [galleryImg, galleryText]);

  return (
    <div className=" header carousel-slider valign">
      <div className="full-width">
        <div className="gallery-img">
          <div className="swiper-container">
            <Swiper {...swiperGalleryImageOptions}>
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="bg-img"
                    data-background={item.img}
                    data-overlay-dark="3"
                  >
                    <a href={item.link}></a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="gallery-text">
          <div className="swiper-container">
            <Swiper
              className="swiper-container swiper-container-initialized swiper-container-vertical"
              {...swiperGalleryTextOptions}
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="text">
                    <h4>{item.title}</h4>
                    <h6>
                      <span>{item.subTitle}</span>
                    </h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="swiper-controls">
        <div className="swiper-button-next swiper-nav-ctrl cursor-pointer">
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="swiper-button-prev swiper-nav-ctrl cursor-pointer">
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Header;
