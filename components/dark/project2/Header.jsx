'use client';
import React, { useLayoutEffect } from 'react';

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
  return (
    <div className="header header-project2 section-padding pb-0">
      <div className="container mt-80 mb-80">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="full-width mb-30">
              <h1 className="mb-10">OPT Media Agency</h1>
              <p>
                We provide digital experience services to startups and small
                businesses. We help our clients succeed by creating brand
                identities.
              </p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Category :</span>
                    <h6>Marketing</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Client :</span>
                    <h6>Envato</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Start Date :</span>
                    <h6>7 August 2021</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="opacity-8 mb-5">Designer :</span>
                    <h6>UiCamp</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div
          className="project2"
          data-carousel="swiper"
          data-items="2"
          data-loop="true"
          data-space="30"
          data-center="true"
        >
          <div
            id="content-carousel-container-unq-project2"
            className="swiper-container"
            data-swiper="container"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/1.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/2.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
