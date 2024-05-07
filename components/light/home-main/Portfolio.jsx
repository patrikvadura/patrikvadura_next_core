'use client';
import React from 'react';

function Portfolio() {
  function handleMouseEnter(event) {
    var tab_id = event.currentTarget.getAttribute('data-tab');

    document.querySelectorAll('.links-text li').forEach((el) => {
      el.classList.remove('current');
    });

    document.querySelector('#' + tab_id).classList.add('current');

    document.querySelectorAll('.links-img .img').forEach((el) => {
      el.classList.remove('current');
    });

    if (!event.currentTarget.classList.contains('current')) {
      event.currentTarget.classList.add('current');
    }
  }

  function handleMouseLeave() {
    document
      .querySelectorAll('.links-img .img')
      .forEach((el) => el.classList.remove('current'));
    document
      .querySelectorAll('.links-text li')
      .forEach((el) => el.classList.remove('current'));
  }
  return (
    <section className="inter-fixed-text section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex justify-content-end">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Our featured <span className="fw-200">projects</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container position-re">
        <div className="links-img">
          <div className="row">
            <div className="col-lg-4 items">
              <div className="item">
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="img"
                  data-tab="tab-1"
                >
                  <img src="/light/assets/imgs/works/1/1.jpg" alt="" />
                  <a href="/light/project1" className="link-overlay"></a>
                </div>
                <div className="cont">
                  <span className="tag">Branding</span>
                  <h2>Earthmade Aroma</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 items">
              <div className="item">
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="img"
                  data-tab="tab-2"
                >
                  <img src="/light/assets/imgs/works/1/2.jpg" alt="" />
                  <a href="/light/project2" className="link-overlay"></a>
                </div>
                <div className="cont">
                  <span className="tag">Branding</span>
                  <h2>Blom Air Purifier</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 items">
              <div className="item">
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="img"
                  data-tab="tab-3"
                >
                  <img src="/light/assets/imgs/works/1/3.jpg" alt="" />
                  <a href="/light/project3" className="link-overlay"></a>
                </div>
                <div className="cont">
                  <span className="tag">Branding</span>
                  <h2>Bank Rebranding</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links-text">
          <ul className="rest">
            <li id="tab-1">
              <span className="tag">Branding</span>
              <h2>Earthmade Aroma</h2>
            </li>
            <li id="tab-2">
              <span className="tag">Branding</span>
              <h2>Blom Air Purifier</h2>
            </li>
            <li id="tab-3">
              <span className="tag">Branding</span>
              <h2>Bank Rebranding</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-40">
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <p>Here are some select projects that showcase.</p>
            <a
              href="/light/portfolio-metro"
              className="butn main-color ml-40 underline"
            >
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
