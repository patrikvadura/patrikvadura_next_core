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
    <div className="header header-project1">
      <div className="container mt-100">
        <div className="row align-items-end">
          <div className="col-lg-7">
            <div className="md-mb30">
              <h1 className="fz-120">
                The order <br /> of a new city
              </h1>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div>
              <p>
                We provide digital experience services to startups and small
                businesses. We help our clients succeed by creating brand
                identities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="head-img o-hidden mt-100">
        <img
          src="/light/assets/imgs/works/projects/5/1.jpg"
          alt=""
          data-speed="0.2"
          data-lag="0"
        />
      </div>
    </div>
  );
}

export default Header;
