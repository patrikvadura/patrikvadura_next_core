import React from 'react';

function Intro() {
  return (
    <section className="page-intro position-re">
      <div className="container-fluid rest">
        <div className="img fit-img">
          <img src="/dark/assets/imgs/background/4.jpg" alt="" />
        </div>
      </div>
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-5">
            <h6 className="sub-title main-color">About Company</h6>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h4>
                Whether you are a development agency looking to outsource design
                work, a company in search of a Product Designer or Product Team,
                a marketing agency that needs a landing page, a startup that
                wants to launch an app, or an enterprise that plans to rebrand
                or redesign its website, we welcome any challenge with our arms
                wide open.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Intro;
