import React from 'react';
import data from '@/data/portfolios/workstand';
function Portfolio() {
  return (
    <section className="work-outline">
      <div className="container-fluid rest">
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <div className="cont mt-20">
                  <h5 className="fz-22">
                    <a href={item.link}>{item.title}</a>
                  </h5>
                  <p>
                    <a href="/dark/portfolio-outline">
                      {item.subTitle.split(' ')[0]}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
