'use client';
import initIsotope from '@/common/initIsotope';
import Script from 'next/script';
import React, { useEffect } from 'react';

function StartDemos() {
  useEffect(() => {
    initIsotope();
  }, []);
  return (
    <section
      className="demos section-padding pt-80 sub-bg2"
      data-scroll-index="0"
    >
      <div className="container-xxl">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">
            Create a Professional Website!
          </h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="d-rotate wow md-mb15">
              <span className="rotate-text">
                <span className="spc-font">20+ pre-made </span>
                <span> Home Pages.</span>
              </span>
            </h2>
            <div className="ml-auto">
              <div className="filtering">
                <div className="filter">
                  <span data-filter="*" className="active">
                    All
                  </span>
                  <span data-filter=".dark">Dark</span>
                  <span data-filter=".light">Light</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery row md-marg">
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-main" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/01.jpg" alt="" />
                </div>
                <h6 className="mt-15">Home Main</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-main" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/1.jpg" alt="" />
                </div>
                <h6 className="mt-15">Home Main (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-startup-onepage" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/02.jpg" alt="" />
                </div>
                <h6 className="mt-15">Modern Startup</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-startup-onepage" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/2.jpg" alt="" />
                </div>
                <h6 className="mt-15">Modern Startup (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-creative-agency" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/03.jpg" alt="" />
                </div>
                <h6 className="mt-15">Creative Agency</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-creative-agency" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/3.jpg" alt="" />
                </div>
                <h6 className="mt-15">Creative Agency (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-modern-agency" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/04.jpg" alt="" />
                </div>
                <h6 className="mt-15">Modern Agency</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-modern-agency" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/4.jpg" alt="" />
                </div>
                <h6 className="mt-15">Modern Agency (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-creative-portfolio" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/05.jpg" alt="" />
                </div>
                <h6 className="mt-15">Creative Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-creative-portfolio" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/5.jpg" alt="" />
                </div>
                <h6 className="mt-15">Creative Portfolio (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-digital-agency" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/06.jpg" alt="" />
                </div>
                <h6 className="mt-15">Digital Agency</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-digital-agency" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/6.jpg" alt="" />
                </div>
                <h6 className="mt-15">Digital Agency (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-freelancer" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/07.jpg" alt="" />
                </div>
                <h6 className="mt-15">Freelancer</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-freelancer" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/7.jpg" alt="" />
                </div>
                <h6 className="mt-15">Freelancer (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-personal-vcard" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/08.jpg" alt="" />
                </div>
                <h6 className="mt-15">Personal vCard</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-personal-vcard" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/8.jpg" alt="" />
                </div>
                <h6 className="mt-15">Personal vCard (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-minimal-portfolio" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/09.jpg" alt="" />
                </div>
                <h6 className="mt-15">Minimal Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-minimal-portfolio" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/9.jpg" alt="" />
                </div>
                <h6 className="mt-15">Minimal Portfolio (Light)</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items dark">
            <div className="item text-center">
              <a href="/dark/home-asymmetric-portfolio" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/010.jpg" alt="" />
                </div>
                <h6 className="mt-15">Asymmetric Portfolio</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items light">
            <div className="item text-center">
              <a href="/light/home-asymmetric-portfolio" target="_blank">
                <div className="img">
                  <img src="/landing-preview/img/demos/10.jpg" alt="" />
                </div>
                <h6 className="mt-15">Asymmetric Portfolio (Light)</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartDemos;
