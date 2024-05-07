import React from 'react';
import data from '@/l-data/services.json';

function Services() {
  return (
    <div
      className="services section-padding bord-thin-top"
      data-scroll-index="3"
    >
      <div className="sec-head mb-50">
        <h3>
          My <span className="fw-200">Specializations</span>
        </h3>
      </div>
      <div className="row sm-marg">
        {data.map((item, i) => (
          <div key={i} className="col-md-6">
            <div className="item-box2 mb-10">
              <div>
                <div className="icon mb-40">
                  <img src={item.img} alt="" />
                </div>
              </div>
              <div>
                <h5 className="mb-15">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
              <a href={item.link} className="rmore">
                <div className="arrow">
                  <img
                    src="/light/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20"
                  />
                </div>
                <div className="shap-left-top">
                  <svg
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11"
                  >
                    <path
                      d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                      fill="#1a1a1a"
                    ></path>
                  </svg>
                </div>
                <div className="shap-right-bottom">
                  <svg
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11"
                  >
                    <path
                      d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                      fill="#1a1a1a"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
