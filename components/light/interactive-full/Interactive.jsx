'use client';
import React from 'react';

function Interactive() {
  const handleMouseEnter = (event) => {
    const tab_id = event.currentTarget.dataset.tab;

    document.querySelectorAll('.links-text li').forEach((el) => {
      el.classList.remove('current');
      el.classList.remove('no-active');
    });
    event.currentTarget.classList.add('current');
    event.currentTarget.classList.remove('no-active');

    document
      .querySelectorAll('.links-img .img')
      .forEach((el) => el.classList.remove('current'));
    document.querySelector('#' + tab_id).classList.add('current');

    if (event.currentTarget.classList.contains('current')) return false;
  };

  const handleMouseLeave = () => {
    document.querySelectorAll('.links-text li').forEach((el) => {
      el.classList.remove('current');
      el.classList.remove('no-active');
    });
    document
      .querySelectorAll('.links-img .img')
      .forEach((el) => el.classList.remove('current'));
  };
  return (
    <section className="inter-links-center section-padding">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <div className="links-text">
              <ul className="rest">
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-1"
                >
                  <h2 className="fz-80">
                    <span className="num">01.</span>
                    <a href="/light/project1">
                      <span className="text f-bold">Digital Retouch</span>{' '}
                    </a>
                  </h2>
                </li>
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-2"
                >
                  <h2 className="fz-80">
                    <span className="num">02.</span>
                    <a href="/light/project2">
                      <span className="text f-bold">Earthmade Aroma</span>
                    </a>
                  </h2>
                </li>
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-3"
                >
                  <h2 className="fz-80">
                    <span className="num">03.</span>
                    <a href="/light/project3">
                      <span className="text f-bold">Bank Rebranding</span>
                    </a>
                  </h2>
                </li>
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-4"
                >
                  <h2 className="fz-80">
                    <span className="num">04.</span>
                    <a href="/light/project4">
                      <span className="text f-bold">Day Starter</span>
                    </a>
                  </h2>
                </li>
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-5"
                >
                  <h2 className="fz-80">
                    <span className="num">05.</span>
                    <a href="/light/project5">
                      <span className="text f-bold">Blue Adobe MAX</span>
                    </a>
                  </h2>
                </li>
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-6"
                >
                  <h2 className="fz-80">
                    <span className="num">06.</span>
                    <a href="/light/project6">
                      <span className="text f-bold">Carved Wood</span>
                    </a>
                  </h2>
                </li>
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-7"
                >
                  <h2 className="fz-80">
                    <span className="num">07.</span>
                    <a href="/light/project3">
                      <span className="text f-bold">Viclone</span>
                    </a>
                  </h2>
                </li>
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-8"
                >
                  <h2 className="fz-80">
                    <span className="num">08.</span>
                    <a href="/light/project4">
                      <span className="text f-bold">Blom Air Purifier</span>
                    </a>
                  </h2>
                </li>
                <li
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  data-tab="tab-9"
                >
                  <h2 className="fz-80">
                    <span className="num">09.</span>
                    <a href="/light/project5">
                      <span className="text f-bold">Avocado Cutter</span>
                    </a>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="links-img">
        <div className="img" id="tab-1" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/1.jpg" alt="" />
        </div>
        <div className="img" id="tab-2" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/2.jpg" alt="" />
        </div>
        <div className="img" id="tab-3" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/3.jpg" alt="" />
        </div>
        <div className="img" id="tab-4" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/4.jpg" alt="" />
        </div>
        <div className="img" id="tab-5" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/5.jpg" alt="" />
        </div>
        <div className="img" id="tab-6" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/6.jpg" alt="" />
        </div>
        <div className="img" id="tab-7" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/7.jpg" alt="" />
        </div>
        <div className="img" id="tab-8" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/8.jpg" alt="" />
        </div>
        <div className="img" id="tab-9" data-overlay-dark="3">
          <img src="/light/assets/imgs/works/full/9.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Interactive;
