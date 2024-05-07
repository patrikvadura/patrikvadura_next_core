import React from 'react';

function Portfolio() {
  return (
    <section
      className="work-minimal section-padding bord-thin-top"
      data-scroll-index="4"
    >
      <div className="sec-head mb-50">
        <h3>
          My <span className="fw-200">Portfolio</span>
        </h3>
      </div>
      <div className="gallery row sm-marg">
        <div className="items col-md-6">
          <div className="item mb-10">
            <div className="img">
              <img src="/light/assets/imgs/works/1/2.jpg" alt="" />
              <div className="cont">
                <h5>
                  <a href="/light/project1">Nice guy with a smile</a>
                </h5>
                <p>
                  <a href="/light/portfolio-gallery">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items col-md-6">
          <div className="item mb-10">
            <div className="img">
              <img src="/light/assets/imgs/works/1/3.jpg" alt="" />
              <div className="cont">
                <h5>
                  <a href="/light/project1">Nice guy with a smile</a>
                </h5>
                <p>
                  <a href="/light/portfolio-gallery">Graphic Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items col-12">
          <div className="item">
            <div className="img">
              <img src="/light/assets/imgs/works/1/h2.png" alt="" />
              <div className="cont d-flex align-items-center">
                <div>
                  <h5>
                    <a href="/light/project1">Nice guy with a smile</a>
                  </h5>
                </div>
                <div className="ml-auto">
                  <p>
                    <a href="/light/portfolio-gallery">Graphic Design</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
