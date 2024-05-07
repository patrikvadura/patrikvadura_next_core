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
        <div className="row">
          <div className="col-lg-10">
            <div className="caption">
              <h2>
                For more than 10 years, we have been using graphic design and
                websites to bring brands to life. InFolio is always on the
                lookout for talent.
              </h2>
              <div className="mt-30">
                <a href="/dark/home-main">Home</a>
                <span className="padding-rl-20">|</span>
                <span className="main-color">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
