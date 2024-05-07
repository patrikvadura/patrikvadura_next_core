'use client';
import React, { useEffect, useLayoutEffect } from 'react';

function Header() {
  //   const tl = gsap.timeline();
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
    <div className="header freelancer" data-scroll-index="0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="img">
              <img src="/dark/assets/imgs/intro/freelancer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="caption">
        <h1 className="up stroke">
          <span>I&#39;m a UI-UX</span> <span>Designer</span>
        </h1>
        <h1 className="down">
          <span>I&#39;m a UI-UX</span> <span>Designer</span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
