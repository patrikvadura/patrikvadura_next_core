import React from 'react';

function Services() {
  return (
    <section className="skills-img-crev pb-50">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 offset-lg-1 valign">
            <div className="img md-mb80">
              <div className="rotate-butn-vid">
                <a
                  href="https://youtu.be/AzwC6umvd1s"
                  className="vid d-flex align-items-center"
                >
                  <div className="icon">
                    <i className="fas fa-play main-color"></i>
                  </div>
                  <span className="sub-title ml-15">Watch Intro</span>
                </a>
              </div>
              <img
                src="/light/assets/imgs/intro/04.jpg"
                alt=""
                className="radius-30"
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title mb-15 main-color">Why Choose Us</h6>
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Best creative & modern</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text"> digital agency.</span>
                  </span>
                </h2>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="text">
                    <p>
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                  <div className="row mt-50 pt-50 bord-thin-top">
                    <div className="col-sm-6">
                      <div className="item d-flex align-items-center sm-mb30">
                        <h2 className="fz-60 line-height-1">
                          <span className="numb-count">52</span>
                        </h2>
                        <span className="sub-title opacity-7 ml-30">
                          Projects <br />
                          Completed
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="item d-flex align-items-center">
                        <h2 className="fz-60 line-height-1">
                          <span className="numb-count">6</span>k
                          <span className="fz-30">+</span>
                        </h2>
                        <span className="sub-title opacity-7 ml-30">
                          Customers <br />
                          Satisfaction
                        </span>
                      </div>
                    </div>
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

export default Services;
