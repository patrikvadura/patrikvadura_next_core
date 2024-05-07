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
    <section className="skills section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skil-progs md-mb80">
              <h3>
                Professionals <span className="fw-300">Skills</span>
              </h3>
              <p className="fz-13 mt-15">
                Similique sunin culpa qui officia deserunt mollitia animi est
                laborum ets dolorum fuga. Et harum quidem rerum facilis esty
                expedita distinctioam nobis est eligendi optio cumquey.
              </p>

              <div className="skill-item mt-50">
                <h6 className="fz-16 mb-10">Product Design</h6>
                <div className="skill-progress">
                  <div className="progres" data-value="82%"></div>
                </div>
              </div>
              <div className="skill-item mt-30">
                <h6 className="fz-16 mb-10">Brand Management</h6>
                <div className="skill-progress">
                  <div className="progres" data-value="94%"></div>
                </div>
              </div>
              <div className="skill-item mt-30">
                <h6 className="fz-16 mb-10">Growth Analysis</h6>
                <div className="skill-progress">
                  <div className="progres" data-value="89%"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="resume-exp">
              <h3>
                Educational <span className="fw-300">Experience</span>
              </h3>
              <p className="fz-13 mt-15">
                Completely evisculates alone expertise through revolutionary
                strategic are theme areas fashion impactful paradigm for process
                centric relation whiteboard seamless capital with methods.
              </p>

              <div className="box-items row mt-50">
                <div className="col-md-6 item">
                  <span className="num">
                    1 <small>st</small>
                  </span>
                  <div className="text-center">
                    <h6 className="fz-16">Business Expert</h6>
                    <span className="opacity-7">2023 - Present(Themes)</span>
                  </div>
                </div>
                <div className="col-md-6 item">
                  <span className="num">
                    2 <small>st</small>
                  </span>
                  <div className="text-center">
                    <h6 className="fz-16">Finance Manager</h6>
                    <span className="opacity-7">2020 - Present(Themes)</span>
                  </div>
                </div>
                <div className="col-md-6 item">
                  <span className="num">
                    3 <small>st</small>
                  </span>
                  <div className="text-center">
                    <h6 className="fz-16">Senior Designer</h6>
                    <span className="opacity-7">2018 - Present(Themes)</span>
                  </div>
                </div>
                <div className="col-md-6 item">
                  <span className="num">
                    4 <small>st</small>
                  </span>
                  <div className="text-center">
                    <h6 className="fz-16">Junior Architect</h6>
                    <span className="opacity-7">2016 - Present(Themes)</span>
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
