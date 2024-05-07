'use client';
import React, { useEffect, useLayoutEffect } from 'react';

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
  return (
    <div
      className="header header-project4 bg-img d-flex align-items-end"
      data-background="/dark/assets/imgs/works/projects/1/1.jpg"
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="caption text-center">
              <h1>The Luxury BMW 8</h1>
            </div>
          </div>
        </div>
        <div className="info mt-80 pt-50 bord-thin-top">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Category :</span>
                <h6>Photography</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Client :</span>
                <h6>Envato</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Start Date :</span>
                <h6>7 August 2021</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Designer :</span>
                <h6>UiCamp</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
