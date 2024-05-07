import React from 'react';
import data from '@/data/team.json';

function Team() {
  return (
    <section className="team section-padding pt-0">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Team</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Meet our <span className="fw-200">legends</span>
            </h2>
            <div className="ml-auto">
              <a href="/dark/page-team" className="go-more">
                <span className="text">Join to us</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="item md-mb50">
                <div className="img">
                  <img src={item.img} alt="" />
                  <div className="info">
                    <span className="fz-12">{item.subName}</span>
                    <h6 className="fz-18">{item.name}</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
