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
      className="header digital-header bg-img"
      data-background="/light/assets/imgs/background/8.jpg"
      data-overlay-dark="4"
    >
      <div className="container-fluid rest">
        <div className="row justify-content-end">
          <div className="col-lg-9 rest">
            <div className="caption">
              <h1>Building digital products, brands & experience.</h1>

              <div className="shap-left-top">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="#1a1a1a"
                  ></path>
                </svg>
              </div>
              <div className="shap-right-bottom">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="#1a1a1a"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-info">
        <p>
          We are professional agency <br /> working with heart from 2018
        </p>

        <div className="shap-left-top">
          <svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              fill="#1a1a1a"
            ></path>
          </svg>
        </div>
        <div className="shap-right-bottom">
          <svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              fill="#1a1a1a"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
