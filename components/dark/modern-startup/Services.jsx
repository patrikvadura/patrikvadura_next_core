import React from 'react';
import data from '@/data/services.json';

function Services() {
  return (
    <section className="services-crev section-padding" data-scroll-index="1">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              What We <span className="fw-200"> Offer</span>
            </h2>
            <div className="ml-auto">
              <a href="/dark/page-services" className="go-more">
                <span className="text">View all Services</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-6">
              <div className="item-box mb-30">
                <div className="d-flex align-items-end">
                  <div>
                    <span className="num fz-20">01.</span>
                    <div className="icon mr-80">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <div className="text mt-30">
                      <p className="mb-80">{item.desc}</p>
                    </div>
                    <a href={item.link}>
                      <span>View More</span>
                      <span className="icon ti-arrow-top-right"></span>
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

export default Services;
