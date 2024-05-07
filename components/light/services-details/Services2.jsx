import React from 'react';
import data from '@/l-data/services.json';

function Services2() {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              What We Have <span className="fw-200">to Offer</span>
            </h2>
            <div className="ml-auto">
              <a href="/light/page-services" className="go-more">
                <span className="text">View all services</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {data.slice(0, 3).map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="item-box radius-15 md-mb30">
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15">{item.title}</h5>
                <p>{item.desc}</p>
                <a href={item.link} className="rmore mt-30">
                  <span className="sub-title">Read More</span>
                  <img
                    src="/light/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services2;
