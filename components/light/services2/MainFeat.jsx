'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function MainFeat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section
      className="main-feat section-padding bg-img"
      data-background="/light/assets/imgs/header/bg-4.png"
      data-overlay-dark="9"
    >
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row justify-content-between">
            <div className="col-lg-6 md-mb50">
              <h6 className="sub-title main-color mb-15">Our Services</h6>
              <h2 className="fw-600 fz-70">
                What We Can Do For <span className="fw-300">Our Clients</span>
              </h2>
            </div>
            <div className="col-lg-5 d-flex align-items-end">
              <div className="text full-width pb-40 bord-thin-bottom">
                <p>
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img
                src="/light/assets/imgs/intro/2.jpg"
                alt=""
                className="radius-15"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-md-6">
                <div className="item mb-50">
                  <h5 className="mb-15">UI-UX Design</h5>
                  <ul className="rest dot-list">
                    <li className="mb-10">Website Design</li>
                    <li className="mb-10">UI/UX Design</li>
                    <li className="mb-10">Mobile App Development</li>
                    <li>Animations</li>
                  </ul>
                </div>
                <div className="item sm-mb50">
                  <h5 className="mb-15">Developments</h5>
                  <ul className="rest dot-list">
                    <li className="mb-10">Website Design</li>
                    <li className="mb-10">UI/UX Design</li>
                    <li className="mb-10">Mobile App Development</li>
                    <li>Animations</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item mb-50">
                  <h5 className="mb-15">Product Design</h5>
                  <ul className="rest dot-list">
                    <li className="mb-10">Website Design</li>
                    <li className="mb-10">UI/UX Design</li>
                    <li className="mb-10">Mobile App Development</li>
                    <li>Animations</li>
                  </ul>
                </div>
                <div className="item">
                  <h5 className="mb-15">Content</h5>
                  <ul className="rest dot-list">
                    <li className="mb-10">Website Design</li>
                    <li className="mb-10">UI/UX Design</li>
                    <li className="mb-10">Mobile App Development</li>
                    <li>Animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFeat;
