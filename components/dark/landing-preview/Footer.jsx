'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    loadBackgroudImages();
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);
  return (
    <footer>
      <div>
        <div
          className=" footer-container section-padding bg-img"
          data-background="/landing-preview/img/foter.jpg"
          data-overlay-dark="9"
        >
          <div className="container ontop">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="text-center">
                  <span className="butn butn-md butn-bord-thin radius-30 mb-30">
                    <span className="text">Hurry up!</span>
                  </span>
                  <h2 className="fz-70">
                    Get <span className="spc-font">InFolio</span> and Create a
                    <span className="spc-font">Professional</span> Website
                    Today!
                  </h2>
                  <a
                    href="#0"
                    className="butn butn-bg butn-md radius-30 main-colorbg mt-30"
                  >
                    <span>
                      <i className="ti-shopping-cart mr-10"></i> Purchase Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
