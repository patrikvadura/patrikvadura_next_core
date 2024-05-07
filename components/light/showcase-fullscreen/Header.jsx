'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Parallax, Pagination, Mousewheel } from 'swiper';

import data from '@/l-data/portfolios/worksfull.json';
import loadBackgroudImages from '@/common/loadBackgroudImages';

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

  const swiperOptions = {
    modules: [Navigation, Autoplay, Parallax, Pagination, Mousewheel],
    speed: 1500,
    autoplay: {
      delay: 5000,
    },
    mousewheel: true,
    parallax: true,
    loop: true,
    onSwiper(swiper) {
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i]
          .querySelector('.bg-img')
          .setAttribute('data-swiper-parallax', 0.75 * swiper.width);
      }
    },
    onResize(swiper) {
      swiper.update();
    },
    pagination: {
      el: '.full-showcase .parallax-slider .swiper-pagination',
      clickable: true,
      renderBullet(_, className) {
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

    navigation: {
      nextEl: '.full-showcase .parallax-slider .swiper-button-next',
      prevEl: '.full-showcase .parallax-slider .swiper-button-prev',
    },
  };

  return (
    <div className="header full-showcase">
      <div className="swiper-container parallax-slider">
        <Swiper {...swiperOptions}>
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="bg-img valign"
                data-background={item.img}
                data-overlay-dark="3"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-11 offset-lg-1">
                      <div className="caption">
                        <h6
                          className="sub-title mb-30"
                          data-swiper-parallax="-1000"
                        >
                          © 2024 <br />
                          {item.subTitle}
                        </h6>
                        <h1>
                          <a href={item.link}>
                            <span data-swiper-parallax="-2000">
                              {item.title}
                            </span>
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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
    </div>
  );
}

export default Header;
