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
    <div className="header crev-agency-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 left-clumn">
            <div className="img">
              <img src="/dark/assets/imgs/intro/02.jpg" alt="" />
            </div>
            <div>
              <h2 className="fz-80">
                6K<span className="fz-40">+</span>
              </h2>
              <h6 className="sub-title">Satisfied Clients</h6>
            </div>
          </div>
          <div className="col-lg-6 valign center-clumn">
            <div>
              <div className="caption main-bg">
                <h1 className="text-u">We design unique digital experience</h1>
              </div>
              <div className="row justify-content-center mt-30">
                <div className="col-md-9">
                  <p>
                    Our team of experts is dedicated to helping you achieve your
                    digital goals. From website design and development to SEO,
                    PPC advertising, and social media marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 right-clumn">
            <div className="text-center">
              <div className="circle-button">
                <a href="https://youtu.be/AzwC6umvd1s" className="vid">
                  <div className="rotate-circle fz-30 text-u">
                    <svg className="textcircle" viewBox="0 0 500 500">
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
                    <i className="fas fa-play"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="img">
              <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
