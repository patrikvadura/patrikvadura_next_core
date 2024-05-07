import React from 'react';

function Footer() {
  return (
    <footer className="sub-bg radius-30 mt-15">
      <div className="container pb-40 pt-80 ontop">
        <div className="d-flex justify-content-center mb-30">
          <div className="logo icon-img-120">
            <img src="/light/assets/imgs/logo-light.png" alt="" />
          </div>
        </div>
        <div className="info-comp d-flex align-items-center justify-content-center pt-40 pb-40 bord-thin-bottom bord-thin-top">
          <div className="mr-30">
            <span className="icon main-color mr-10 ti-email"></span>
            <span className="text">Support@Website.com</span>
          </div>
          <div className="mr-30">
            <span className="icon main-color mr-10 ti-mobile"></span>
            <span className="text">+2 456 (343) 24 45</span>
          </div>
          <div>
            <span className="icon main-color mr-10 ti-location-pin"></span>
            <span className="text">Trussville 43 Crossings, Birmingham</span>
          </div>
        </div>
        <div className="row sub-footer mt-40 pt-25 pb-25 main-bg radius-30 padding-rl-30">
          <div className="col-lg-4 col-md-6 md-mb15">
            <ul className="rest d-flex align-items-center">
              <li className="hover-this cursor-pointer">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 order-md-3">
            <div className="text-center">
              <p className="fz-14">
                © 2024 InFolio is Proudly Powered by{' '}
                <span className="underline main-color">
                  <a href="https://themeforest.net/user/UiCamp" target="_blank">
                    UiCamp
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 md-mb15 order-md-2">
            <div className="links d-flex justify-content-end">
              <ul className="rest d-flex align-items-center">
                <li>
                  <a href="/light/page-FAQS">FAQ</a>
                </li>
                <li className="ml-30">
                  <a href="/light/page-about2">Careers</a>
                </li>
                <li className="ml-30">
                  <a href="/light/page-contact2">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
