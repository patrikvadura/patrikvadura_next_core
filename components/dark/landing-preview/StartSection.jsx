'use client';
import Script from 'next/script';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
function StartSection() {
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
  // useEffect(() => {
  // Smooth Scroll of Page
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // ScrollTrigger.normalizeScroll(true);
  // ScrollSmoother.create({
  //   smooth: 2,
  //   effects: true,
  // });
  // // Horizontal Scroll
  // if (window.innerWidth > 991) {
  //   gsap.registerPlugin(ScrollTrigger);
  //   let sections = gsap.utils.toArray('.panel');
  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.thecontainer',
  //       pin: true,
  //       scrub: 1,
  //       end: () =>
  //         '+=' + document.querySelector('.thecontainer')?.offsetWidth,
  //     },
  //   });
  // }
  //   // Footer Animation
  //   if (window.innerWidth > 991) {
  //     gsap.set('.footer-container', { yPercent: -50 });
  //     const uncover = gsap.timeline({ paused: true });
  //     uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
  //     ScrollTrigger.create({
  //       trigger: 'main',
  //       start: 'bottom bottom',
  //       end: '+=50%',
  //       animation: uncover,
  //       scrub: true,
  //     });
  //   }

  // window.addEventListener('resize', handleResize);

  //   return () => {
  //     // window.removeEventListener('resize', handleResize);
  //     // document.body.classList.remove('home-main-crev', 'main-bg');
  //   };
  // }, []);

  return (
    <>
      <section className="works showcases thecontainer  ontop sub-bg">
        <div className="text">
          <h2 className="text-bg">Showcases</h2>
        </div>
        <Swiper
          style={{ marginTop: '180px' }}
          id="content-carousel-container-unq-clients"
          className="swiper-container"
          {...swiperOptions}
        >
          <SwiperSlide>
            <div className="item">
              <div className="img">
                <img src="/landing-preview/img/showcase/1.jpg" alt="" />
              </div>
              <div className="text-center">
                <h5>Fullscreen slider</h5>
              </div>
              <a
                href="/dark/showcase-fullscreen"
                className="plink"
                target="_blank"
              ></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <div className="img">
                <img src="/landing-preview/img/showcase/2.jpg" alt="" />
              </div>
              <div className="text-center">
                <h5>Carousel Showcase</h5>
              </div>
              <a
                href="/dark/showcase-carousel"
                className="plink"
                target="_blank"
              ></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <div className="img">
                <img src="/landing-preview/img/showcase/3.jpg" alt="" />
              </div>
              <div className="text-center">
                <h5>Creative slider</h5>
              </div>
              <a
                href="/dark/showcase-half-slider"
                className="plink"
                target="_blank"
              ></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <div className="img">
                <img src="/landing-preview/img/showcase/4.jpg" alt="" />
              </div>
              <div className="text-center">
                <h5>Interactive Fullscreen</h5>
              </div>
              <a
                href="/dark/showcase-interactive-full"
                className="plink"
                target="_blank"
              ></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <div className="img">
                <img src="/landing-preview/img/showcase/5.jpg" alt="" />
              </div>
              <div className="text-center">
                <h5>Interactive Center</h5>
              </div>
              <a
                href="/dark/showcase-interactive-center"
                className="plink"
                target="_blank"
              ></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <div className="img">
                <img src="/landing-preview/img/showcase/6.jpg" alt="" />
              </div>
              <div className="text-center">
                <h5>Interactive Vertical</h5>
              </div>
              <a
                href="/dark/showcase-interactive-vertical"
                className="plink"
                target="_blank"
              ></a>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/1.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Fullscreen slider</h5>
            </div>
            <a
              href="/dark/showcase-fullscreen"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/2.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Carousel Showcase</h5>
            </div>
            <a
              href="/dark/showcase-carousel"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/3.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Creative slider</h5>
            </div>
            <a
              href="/dark/showcase-half-slider"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/4.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Interactive Fullscreen</h5>
            </div>
            <a
              href="/dark/showcase-interactive-full"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/5.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Interactive Center</h5>
            </div>
            <a
              href="/dark/showcase-interactive-center"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/6.jpg" alt="" />
            </div>
            <div className="text-center">
              <h5>Interactive Vertical</h5>
            </div>
            <a
              href="/dark/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div> */}
      </section>
      {/* <Script src="/dark/assets/js/hscroll" /> */}
    </>
  );
}

export default StartSection;
