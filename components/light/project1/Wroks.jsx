'use client';
import React, { useEffect } from 'react';
import data from '@/l-data/portfolios/works0.json';
import { Swiper, SwiperSlide } from 'swiper/react';

function Wroks() {
  // useEffect(() => {
  //   // Smooth Scroll of Page
  //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  //   ScrollTrigger.normalizeScroll(true);
  //   ScrollSmoother.create({
  //     smooth: 2,
  //     effects: true,
  //   });
  //   // Horizontal Scroll
  //   if (window.innerWidth > 991) {
  //     gsap.registerPlugin(ScrollTrigger);
  //     let sections = gsap.utils.toArray('.panel');
  //     gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: '.thecontainer',
  //         pin: true,
  //         scrub: 1,
  //         end: () =>
  //           '+=' + document.querySelector('.thecontainer')?.offsetWidth,
  //       },
  //     });
  //   }
  //   //   // Footer Animation
  //   //   if (window.innerWidth > 991) {
  //   //     gsap.set('.footer-container', { yPercent: -50 });
  //   //     const uncover = gsap.timeline({ paused: true });
  //   //     uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
  //   //     ScrollTrigger.create({
  //   //       trigger: 'main',
  //   //       start: 'bottom bottom',
  //   //       end: '+=50%',
  //   //       animation: uncover,
  //   //       scrub: true,
  //   //     });
  //   //   }

  //   // window.addEventListener('resize', handleResize);

  //   return () => {
  //     // window.removeEventListener('resize', handleResize);
  //     // document.body.classList.remove('home-main-crev', 'main-bg');
  //   };
  // }, []);
  const swiperOptions = {
    slidesPerView: 6,
    spaceBetween: 100,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 60,
        centeredSlides: true,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween: 100,
        centeredSlides: true,
      },
    },
  };
  return (
    <>
      <div className="works thecontainer ontop">
        <Swiper
          id="content-carousel-container-unq-clients"
          className="swiper-container"
          {...swiperOptions}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="item">
                <div className="img">
                  <img src={item} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Wroks;
