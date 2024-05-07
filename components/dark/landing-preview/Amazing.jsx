import React from 'react';

function Amazing() {
  return (
    <section className="respo section-padding pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/landing-preview/img/resp.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <h6 className="sub-title mb-15 main-color">Looks Amazing</h6>
              <h2 className="mb-30">
                Fully <span className="spc-font">responsive</span> <br />
                <span className="spc-font"> design</span> for all devices
              </h2>
              <p>
                InFolio automatically detects the screen size and adjust the
                content accordingly to provide fully responsive and optimised
                sites.
              </p>
              <a href="#0" className="go-more mt-50">
                <span className="text main-color">Explore More</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amazing;
