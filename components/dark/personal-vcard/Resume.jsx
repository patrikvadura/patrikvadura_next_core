import React from 'react';

function Resume() {
  return (
    <div className="resume section-padding bord-thin-top" data-scroll-index="2">
      <div className="sec-head mb-50">
        <h3>
          Working <span className="fw-200">Experience</span>
        </h3>
      </div>
      <div>
        <div className="resume-clumn">
          <div className="items mb-40">
            <h6 className="date fz-14">2018 - Present</h6>
            <h5>
              Art Director <span className="fw-200 ml-15">[ at UiCamp ]</span>
            </h5>
            <div className="row">
              <div className="col-md-10">
                <p className="mt-15 fz-14">
                  Crafting captivating digital experiences that put users at the
                  heart of the design. Elevate your product to increased.
                </p>
              </div>
            </div>
          </div>
          <div className="items mb-40">
            <h6 className="date fz-14">2015 - 2017</h6>
            <h5>
              Front-end Developer{' '}
              <span className="fw-200 ml-15">[ at Envato Market ]</span>
            </h5>
            <div className="row">
              <div className="col-md-10">
                <p className="mt-15 fz-14">
                  Crafting captivating digital experiences that put users at the
                  heart of the design. Elevate your product to increased.
                </p>
              </div>
            </div>
          </div>
          <div className="items">
            <h6 className="date fz-14">2010 - 2014</h6>
            <h5>
              Bachelor&apos;s Degree in Design{' '}
              <span className="fw-200 ml-15">[ US RMIT University ]</span>
            </h5>
            <div className="row">
              <div className="col-md-10">
                <p className="mt-15 fz-14">
                  Crafting captivating digital experiences that put users at the
                  heart of the design. Elevate your product to increased.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
