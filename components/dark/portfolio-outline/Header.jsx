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
    <div className="header page-header section-padding">
      <div className="container pt-100">
        <div className="text-center">
          <h1>Portfolio Outline.</h1>
          <div className="mt-15">
            <a href="/dark/home-main">Home</a>
            <span className="padding-rl-20">|</span>
            <span className="main-color">Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
