import React from 'react';

function Price() {
  return (
    <section className="price-hr section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="cont full-width md-mb50">
              <div>
                <h6 className="sub-title main-color mb-15 wow fadeIn">
                  Over 150.000+ Clients
                </h6>
                <h3 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Affordable pricing.</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">Easy scaling.</span>
                  </span>
                </h3>
                <div className="text mt-20">
                  <p>
                    We grow your brands through bold service we’re providing
                    fusce vulputate eleifend sapien. Etiam sollicitudin, ipsum.
                  </p>
                </div>
                <ul className="rest list-arrow mt-30 pt-30 bord-thin-top">
                  <li>
                    <span className="icon">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                          fill="#14cf93"
                        ></path>
                      </svg>
                    </span>
                    <h6 className="inline fw-400">Amazing communication.</h6>
                  </li>
                  <li className="mt-10">
                    <span className="icon">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                          fill="#14cf93"
                        ></path>
                      </svg>
                    </span>
                    <h6 className="inline fw-400">
                      Best trendinf designing experience.
                    </h6>
                  </li>
                  <li className="mt-10">
                    <span className="icon">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                          fill="#14cf93"
                        ></path>
                      </svg>
                    </span>
                    <h6 className="inline fw-400">Email & Live chat.</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <div className="item sub-bg radius-10 d-flex align-items-center mb-30">
                <div className="type">
                  <div className="icon-img-60 mb-10">
                    <img src="/dark/assets/imgs/icon-img/shape1.png" alt="" />
                  </div>
                  <h5 className="fw-600">Advanced</h5>
                </div>
                <div className="cont ml-50">
                  <ul className="dot-list rest">
                    <li className="mb-10">Guarenteed quality control</li>
                    <li className="mb-10">Top quality service</li>
                    <li className="mb-10">Best experts at your lease</li>
                    <li>7 days free</li>
                  </ul>
                </div>
                <div className="mount ml-auto text-center">
                  <h3 className="numb-font">
                    <span className="fz-20">$</span> 19
                  </h3>
                  <div>
                    <a
                      href="/dark/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="fz-13">Sign Up</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item main-colorbg radius-10 text-dark d-flex align-items-center">
                <div className="type">
                  <div className="icon-img-60 mb-10">
                    <img src="/dark/assets/imgs/icon-img/shape03.png" alt="" />
                  </div>
                  <h5 className="fw-600">Enterprise</h5>
                </div>
                <div className="cont ml-50">
                  <ul className="dot-list rest">
                    <li className="mb-10">Guarenteed quality control</li>
                    <li className="mb-10">Top quality service</li>
                    <li className="mb-10">Best experts at your lease</li>
                    <li>7 days free</li>
                  </ul>
                </div>
                <div className="mount ml-auto text-center">
                  <h3 className="numb-font">
                    <span className="fz-20">$</span> 49
                  </h3>
                  <div>
                    <a
                      href="/dark/page-contact"
                      className="butn butn-md butn-bord text-dark radius-30"
                    >
                      <span className="fz-13">Sign Up</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
