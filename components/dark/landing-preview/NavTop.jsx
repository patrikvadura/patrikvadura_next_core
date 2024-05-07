'use client';
import React, { useEffect } from 'react';

function NavTop() {
  return (
    <nav className="navbar navbar-expand-lg bord blur pt-15 pb-15">
      <div className="container d-block">
        <div className="row align-items-center">
          <div className="col-lg-4 col-6 md-hide">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-scroll-nav="0">
                    Demos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-scroll-nav="1">
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://uicamp.smartinnovates.net/docs/nextjs/"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-6 text-center">
            <a className="logo icon-img-120" href="#">
              <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
            </a>
          </div>
          <div className="col-lg-4 col-6 d-flex">
            <div className="ml-auto">
              <a href="#0" className="butn butn-bord butn-md radius-30 fz-14">
                <span>
                  <i className="ti-shopping-cart mr-10"></i> Purchase Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTop;
