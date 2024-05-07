import React from 'react';

function About() {
  return (
    <section className="about" data-scroll-index="2">
      <div className="container section-padding bord-thin-top">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15">Who We Are</h6>
              <h3>
                Our team consists ofnpractitioners who have years of experience
                in launching & managing projects.
              </h3>
              <div className="d-flex align-items-end mt-100">
                <div>
                  <a
                    href="/light/page-about3"
                    className="d-flex align-items-end"
                  >
                    <span className="sub-title nowrap">About Us</span>
                    <span className="fz-70 line-height-45 ti-arrow-top-right"></span>
                  </a>
                </div>
                <div className="ml-80">
                  <p>
                    With our low code solution you can model your process
                    automation by yourself. This will increase your productivity
                    in real time and bring all-around flexibility and
                    best-in-class quality.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-vid">
              <img src="/light/assets/imgs/intro/2.jpg" alt="" />
              <div className="curv-butn main-bg">
                <a href="https://youtu.be/AzwC6umvd1s" className="vid">
                  <div className="icon">
                    <i className="fas fa-play"></i>
                  </div>
                </a>
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
      </div>
    </section>
  );
}

export default About;
