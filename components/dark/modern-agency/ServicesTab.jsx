'use client';
import React from 'react';

function ServicesTab() {
  const openTab = (event) => {
    document
      .querySelectorAll('.tab-content')
      .forEach((element) => (element.style.display = 'none'));
    const tabid = event.currentTarget.getAttribute('data-tab');
    document.querySelector(`.tab-content#${tabid}`).style.display = 'block';
  };
  return (
    <section className="services-tab section-padding mb-80">
      <div className="container">
        <div className="row lg-marg" id="tabs">
          <div className="col-lg-6 valign">
            <div className="serv-tab-cont md-mb80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
                    </div>
                    <div className="text">
                      <p>
                        We are a creative studio specializing in design,
                        development and strategy many different skills and
                        disciplines in the production of all web.
                      </p>
                    </div>
                    <a href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-2">
                <div className="item">
                  <div className="img">
                    <img src="/dark/assets/imgs/intro/02.jpg" alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src="/dark/assets/imgs/serv-icons/1.png" alt="" />
                    </div>
                    <div className="text">
                      <p>
                        We are a creative studio specializing in design,
                        development and strategy many different skills and
                        disciplines in the production of all web.
                      </p>
                    </div>
                    <a href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-3">
                <div className="item">
                  <div className="img">
                    <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src="/dark/assets/imgs/serv-icons/2.png" alt="" />
                    </div>
                    <div className="text">
                      <p>
                        We are a creative studio specializing in design,
                        development and strategy many different skills and
                        disciplines in the production of all web.
                      </p>
                    </div>
                    <a href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-4">
                <div className="item">
                  <div className="img">
                    <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src="/dark/assets/imgs/serv-icons/0.png" alt="" />
                    </div>
                    <div className="text">
                      <p>
                        We are a creative studio specializing in design,
                        development and strategy many different skills and
                        disciplines in the production of all web.
                      </p>
                    </div>
                    <a href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="serv-tab-link tab-links full-width pt-40">
              <div className="sec-head mb-30">
                <h6 className="sub-title mb-15 main-color">Who we are?</h6>
                <h2>The ultmiate guide to marketing success.</h2>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="text mb-50">
                    <p>
                      We shifted our talents to frontier science because we
                      wanted our work to have tangible. we get front row seats
                      to the future.
                    </p>
                  </div>
                  <ul className="rest">
                    <li
                      onClick={openTab}
                      className="item-link current mb-15"
                      data-tab="tabs-1"
                    >
                      <h3>
                        <span className="fz-18 opacity-7 mr-15">01</span> About
                        Us
                      </h3>
                    </li>
                    <li
                      onClick={openTab}
                      className="item-link mb-15"
                      data-tab="tabs-2"
                    >
                      <h3>
                        <span className="fz-18 opacity-7 mr-15">02</span> Our
                        Mission
                      </h3>
                    </li>
                    <li
                      onClick={openTab}
                      className="item-link mb-15"
                      data-tab="tabs-3"
                    >
                      <h3>
                        <span className="fz-18 opacity-7 mr-15">03</span> Our
                        Vision
                      </h3>
                    </li>
                    <li
                      onClick={openTab}
                      className="item-link"
                      data-tab="tabs-4"
                    >
                      <h3>
                        <span className="fz-18 opacity-7 mr-15">04</span>{' '}
                        Achievements
                      </h3>
                    </li>
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

export default ServicesTab;
