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
    <div className="header crev-portfolio-header section-padding position-re">
      <div
        // style={{ translate: (0, 0), opacity: 1 }}
        className="container pt-50 ontop"
      >
        <div className="row">
          <div className="col-lg-10">
            <div className="caption">
              <h1>
                Branding and web design studio, driven by strategy & innovation.{' '}
                <span className="underline main-color fz-30">
                  <a href="/light/page-contact2">Contact Us</a>
                </span>
              </h1>
              <div className="row mt-30">
                <div className="col-lg-4">
                  <div className="circle-button md-hide">
                    <div className="rotate-circle fz-30 text-u">
                      <svg
                        className="textcircle opacity-7"
                        viewBox="0 0 500 500"
                      >
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          ></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength="900">
                            Explore More - Explore More -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="icon">
                      <span className="ti-arrow-down fz-40"></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 valign">
                  <div className="text">
                    <p className="fz-18">
                      We combine forward-thinking design with modern technology
                      to tell stories that transform and grow our partners
                      brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="numb-fixed d-flex align-items-center">
          <div className="mr-30">
            <h2>54</h2>
            <h6 className="sub-title fw-300 mt-10">Completed Works</h6>
          </div>
          <div>
            <h2>08</h2>
            <h6 className="sub-title fw-300 mt-10">Years Experience</h6>
          </div>
        </div>
      </div>
      <div
        className="bg-pattern bg-img opacity-4"
        data-background="/light/assets/imgs/patterns/pattern2.png"
      ></div>
    </div>
  );
}

export default Header;
