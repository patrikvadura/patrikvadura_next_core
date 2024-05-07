'use cient';
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
    <div
      className="my-skills section-padding bord-thin-top"
      data-scroll-index="1"
    >
      <div className="sec-head mb-50">
        <h3>
          My <span className="fw-200">Skills</span>
        </h3>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="item mb-30">
            <div className="d-flex align-items-center mb-30">
              <div className="mr-30">
                <div className="img icon-img-40">
                  <img src="/dark/assets/imgs/resume/s1.png" alt="" />
                </div>
              </div>
              <div>
                <h6 className="fz-18">UI / UX Design</h6>
              </div>
            </div>
            <div className="skill-progress">
              <span className="progres" data-value="95%"></span>
            </div>
            <span className="value">95%</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="item mb-30">
            <div className="d-flex align-items-center mb-30">
              <div className="mr-30">
                <div className="img icon-img-40">
                  <img src="/dark/assets/imgs/resume/s2.png" alt="" />
                </div>
              </div>
              <div>
                <h6 className="fz-18">Development</h6>
              </div>
            </div>
            <div className="skill-progress">
              <span className="progres" data-value="90%"></span>
            </div>
            <span className="value">90%</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="item sm-mb30">
            <div className="d-flex align-items-center mb-30">
              <div className="mr-30">
                <div className="img icon-img-40">
                  <img src="/dark/assets/imgs/resume/s3.png" alt="" />
                </div>
              </div>
              <div>
                <h6 className="fz-18">Graphic Design</h6>
              </div>
            </div>
            <div className="skill-progress">
              <span className="progres" data-value="85%"></span>
            </div>
            <span className="value">85%</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="item">
            <div className="d-flex align-items-center mb-30">
              <div className="mr-30">
                <div className="img icon-img-40">
                  <img src="/dark/assets/imgs/resume/s4.png" alt="" />
                </div>
              </div>
              <div>
                <h6 className="fz-18">WordPress</h6>
              </div>
            </div>
            <div className="skill-progress">
              <span className="progres" data-value="78%"></span>
            </div>
            <span className="value">78%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
