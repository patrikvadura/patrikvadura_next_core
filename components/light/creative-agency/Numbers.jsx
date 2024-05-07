import React from 'react';

function Numbers() {
  return (
    <section className="numbers">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <h2 className="fz-80 line-height-1">52</h2>
              <span className="sub-title opacity-7 ml-30">
                Projects <br /> Completed
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <h2 className="fz-80 line-height-1">34</h2>
              <span className="sub-title opacity-7 ml-30">
                Team <br /> Members
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center">
              <h2 className="fz-80 line-height-1">
                6k<span className="fz-50">+</span>
              </h2>
              <span className="sub-title opacity-7 ml-30">
                Customers <br /> Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
