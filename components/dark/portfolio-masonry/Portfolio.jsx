'use client';
import initIsotope2 from '@/common/initIsotope2';
import React, { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    initIsotope2();
  }, []);
  return (
    <section className="work-minimal section-padding sub-bg">
      <div className="container-xxl">
        <div className="row">
          <div className="filtering col-12 mb-50 text-center">
            <div className="filter">
              <span className="text">Filter By :</span>
              <span data-filter="*" className="active">
                Show All
              </span>
              <span data-filter=".art">Art</span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".design">Design</span>
              <span data-filter=".marketing">Marketing</span>
            </div>
          </div>
        </div>
        <div className="gallery2 row sm-marg">
          <div className="col-lg-6 items design brand">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/h1.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="/dark/project3">Nice guy with a smile</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Graphic Designing</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 brand marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/1.jpg" alt="" />
                <div className="cont">
                  <h5>
                    <a href="/dark/project3">A Nice guy</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-standard">Graphic Design</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 art design">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/2.jpg" alt="" />
                <div className="cont">
                  <h5>
                    <a href="/dark/project3">A Nice guy</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-standard">Graphic Design</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 brand">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/3.jpg" alt="" />
                <div className="cont">
                  <h5>
                    <a href="/dark/project3">A Nice guy</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-standard">Graphic Design</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/4.jpg" alt="" />
                <div className="cont">
                  <h5>
                    <a href="/dark/project3">A Nice guy</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-standard">Graphic Design</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items art marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/h2.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="/dark/project3">Nice guy with a smile</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Graphic Designing</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items design marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/h3.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="/dark/project3">Nice guy with a smile</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Graphic Designing</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items">
            <div className="item mt-10">
              <div className="img">
                <img src="/dark/assets/imgs/works/4/h4.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="/dark/project3">Nice guy with a smile</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/dark/portfolio-standard">Graphic Designing</a>
                    </p>
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

export default Portfolio;
