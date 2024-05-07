'use client';
import React, { useLayoutEffect } from 'react';

function Error() {
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
    <div className="header page-header-error section-padding valign">
      <div className="container">
        <div className="text-center">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="img">
                <img src="/dark/assets/imgs/404.png" alt="" />
              </div>
              <div className="text mt-40">
                <h2 className="mb-10">Page not found</h2>
                <p>Sorry, but the page you are looking for does not exist.</p>
                <a
                  href="/dark/home-main"
                  className="butn butn-md butn-bg main-colorbg text-dark radius-30 mt-30"
                >
                  <span className="text">Back to Home</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-marq">
        <div className="slide-har st1">
          <div className="box">
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
          </div>
          <div className="box">
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
            <div className="item">
              <h4 className="d-flex align-items-center fw-800">
                <span>Error 404</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
