'use client';
import isInView from '@/common/isInView';
import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);

  function handleShowProgressValues() {
    isInView({
      selector: '.skill-progress .progres',
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      },
    });
  }
  return (
    <section
      className="about-crev section-padding sub-bg position-re ontop"
      data-scroll-index="4"
    >
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-6">
            <div className="left-block mt-100 md-mb50">
              <div className="d-flex align-items-center">
                <div>
                  <div className="info">
                    <h6>
                      Sam <br />
                      Peterson
                    </h6>
                    <p className="nowrap">Ceo Manager</p>
                  </div>
                </div>
                <div>
                  <div className="img fit-img radius-30">
                    <img src="/light/assets/imgs/intro/03.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="mz-shap">
                <svg
                  height="100%"
                  viewBox="0 0 610 547"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z"
                    fill="#1a1a1a"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content full-width">
              <div className="sec-head mb-30">
                <h6 className="sub-title mb-15 main-color">Our Skills</h6>
                <h2>The ultmiate guide to marketing success.</h2>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="text">
                    <p>
                      We shifted our talents to frontier science because we
                      wanted our work to have tangible, human-positive impact.
                      Also, we get front row seats to the future.
                    </p>
                  </div>
                  <div className="mt-50">
                    <div className="skills-box">
                      <div className="skill-item mb-40">
                        <h5 className="sub-title mb-15">UI / UX Design</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="90%"></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <h5 className="sub-title mb-15">Apps Development</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="80%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team section-padding pb-0">
          <div className="row">
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="img">
                  <img src="/light/assets/imgs/team/1.jpg" alt="" />
                  <div className="info">
                    <span className="fz-12">Web Designer</span>
                    <h6 className="fz-18">Robert De Niro</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="img">
                  <img src="/light/assets/imgs/team/2.jpg" alt="" />
                  <div className="info">
                    <span className="fz-12">Web Designer</span>
                    <h6 className="fz-18">Brendan Fraser</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="img">
                  <img src="/light/assets/imgs/team/3.jpg" alt="" />
                  <div className="info">
                    <span className="fz-12">Web Designer</span>
                    <h6 className="fz-18">Brendan Fraser</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram"></i>
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

export default Skills;
