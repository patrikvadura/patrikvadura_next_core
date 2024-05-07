'use client';
import React from 'react';

function Porfolios() {
  return (
    <section className="uniq-portfolio section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="text md-mb50">
              <h2 className="mb-30">
                <span className="spc-font">All Possible </span> <br />
                Portfolio Layouts
              </h2>
              <p>
                With pre-defined layouts, you can create a portfolio of
                articles, images, or videos and show them in an organized and
                visually appealing way.
              </p>
              <div className="thum-work mt-30">
                <div className="item">
                  <a href="/dark/portfolio-standard" target="_blank">
                    <img src="/landing-preview/img/works/l1.png" alt="" />
                    <span className="fz-14">Standerd</span>
                  </a>
                </div>
                <div className="item">
                  <a href="/dark/portfolio-masonry" target="_blank">
                    <img src="/landing-preview/img/works/l2.png" alt="" />
                    <span className="fz-14">Masonry</span>
                  </a>
                </div>
                <div className="item">
                  <a href="/dark/portfolio-metro" target="_blank">
                    <img src="/landing-preview/img/works/l3.png" alt="" />
                    <span className="fz-14">Metro</span>
                  </a>
                </div>
                <div className="item">
                  <a href="/dark/portfolio-sticky" target="_blank">
                    <img src="/landing-preview/img/works/l4.png" alt="" />
                    <span className="fz-14">Sticky</span>
                  </a>
                </div>
                <div className="item">
                  <a href="/dark/portfolio-caption-cursor" target="_blank">
                    <img src="/landing-preview/img/works/l6.png" alt="" />
                    <span className="fz-14">Caption Cursor</span>
                  </a>
                </div>
                <div className="item">
                  <a href="/dark/portfolio-outline" target="_blank">
                    <img src="/landing-preview/img/works/l5.png" alt="" />
                    <span className="fz-14">Outline</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="imgs">
              <img src="/landing-preview/img/works/layout.png" alt="" />
              <img
                src="/landing-preview/img/works/layout1.png"
                alt=""
                className="img-abslout"
                data-speed="1.2"
                data-lag="0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay opacity-5">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Porfolios;
