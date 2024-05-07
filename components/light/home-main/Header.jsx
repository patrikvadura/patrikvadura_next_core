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
      className="header main-header bg-img"
      data-background="/light/assets/imgs/header/bg1.jpg"
      data-overlay-dark="8"
    >
      <div className="container pt-100">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="text mb-100">
              <h4>
                We are a creative studio that specializes in providing
                high-quality design and branding solutions to businesses and
                individuals.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ontop">
        <div className="container">
          <div className="lg-text">
            <div className="d-flex">
              <h6>BUILIDNG DIGITAL DESIGN</h6>
              <h6 className="ml-auto">CREATIVE STUDIO</h6>
            </div>
            <h1>Creative Agency</h1>
          </div>
        </div>
        <div className="img">
          <img src="/light/assets/imgs/header/2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
