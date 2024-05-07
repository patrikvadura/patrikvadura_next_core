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
      className="header page-header bg-img section-padding"
      data-background="/dark/assets/imgs/header/bg1.jpg"
      data-overlay-dark="9"
    >
      <div className="container pt-100">
        <div className="text-center">
          <h1>Portfolio Gallery.</h1>
          <div className="mt-15">
            <a href="#0">Home</a>
            <span className="padding-rl-20">|</span>
            <span className="main-color">Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
