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
    <div className="header startup-header" data-scroll-index="0">
      <div
        className="valign bg-img"
        data-background="/dark/assets/imgs/background/1.jpg"
        data-overlay-dark="5"
      >
        <div className="container pt-40">
          <div className="caption">
            <div className="lg-text fw-600">
              <div className="text d-flex align-items-center">
                <span>We create</span>
              </div>
              <div className="text">impactful</div>
              <div className="text">digital experiences</div>
            </div>
            <p>
              We combine forward-thinking design with modern technology to tell
              stories that transform and grow our partners brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
