'use client';
import React, { useEffect } from 'react';

function Team() {
  function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll('[data-background]');

    if (backgroudImages.length > 0) {
      backgroudImages.forEach((element) => {
        let image = element.dataset.background;
        element.style.backgroundImage = `url('${image}')`;
      });
    }
  }
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  function handleMouseEnter(event) {
    var tab_id = event.currentTarget.getAttribute('data-tab');

    document.querySelectorAll('.links-text li').forEach((el) => {
      el.classList.remove('current');
      // el.classList.add('no-active');
    });
    event.currentTarget.classList.add('current');
    // event.currentTarget.classList.remove('no-active');

    document
      .querySelectorAll('.glry-img .tab-img')
      .forEach((el) => el.classList.remove('current'));
    document.querySelector('#' + tab_id).classList.add('current');

    if (event.currentTarget.classList.contains('current')) return false;
  }
  return (
    <section className="team-tab bord-thin-bottom bord-thin-top">
      <div className="container-fluid rest">
        <div className="sec-head pb-30 pt-20 bord-thin-bottom">
          <div className="main-marq xlrg o-hidden">
            <div className="slide-har st1">
              <div className="box">
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
              </div>
              <div className="box">
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
                <div className="item">
                  <h4 className="d-flex align-items-center">
                    <span>Meet Our Team</span>
                    <span className="fz-50 ml-50 stroke icon">*</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 rest">
            <div className="glry-img">
              <div
                id="tab-1"
                className="bg-img tab-img current"
                data-background="/light/assets/imgs/team/1.jpg"
              ></div>
              <div
                id="tab-2"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/team/2.jpg"
              ></div>
              <div
                id="tab-3"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/team/3.jpg"
              ></div>
              <div
                id="tab-4"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/team/4.jpg"
              ></div>
              <div
                id="tab-5"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/team/3.jpg"
              ></div>
            </div>
          </div>
          <div className="col-lg-7 rest content">
            <div
              onMouseEnter={handleMouseEnter}
              className="cluom current"
              data-tab="tab-1"
            >
              <div className="info">
                <h6 className="sub-title opacity-7">Web Designer</h6>
                <h4>Robert De Niro</h4>
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/page-team-single">
                  View More <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              className="cluom"
              data-tab="tab-2"
            >
              <div className="info">
                <h6 className="sub-title opacity-7">Project Manager</h6>
                <h4>Brendan Fraser</h4>
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/page-team-single">
                  View More <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              className="cluom"
              data-tab="tab-3"
            >
              <div className="info">
                <h6 className="sub-title opacity-7">Web Developer</h6>
                <h4>Brendan Fraser</h4>
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/page-team-single">
                  View More <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              className="cluom"
              data-tab="tab-4"
            >
              <div className="info">
                <h6 className="sub-title opacity-7">UI-UX Designer</h6>
                <h4>Brendan Fraser</h4>
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/page-team-single">
                  View More <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              className="cluom"
              data-tab="tab-5"
            >
              <div className="info">
                <h6 className="sub-title opacity-7">SEO Manager</h6>
                <h4>Brendan Fraser</h4>
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/page-team-single">
                  View More <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
