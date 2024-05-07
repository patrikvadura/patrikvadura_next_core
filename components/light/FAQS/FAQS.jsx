'use client';
import React from 'react';

function FAQS() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="faqs section-padding position-re">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15">FAQS</h6>
              <h2>
                Frequently <br /> asked questions
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list-serv">
              <div className="accordion bord">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Designing Content With AI Power</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-15 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div onClick={openAccordion} className="title">
                    <h6>Talented, Professional & Expert Team</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-30">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                    <p className="mb-10">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                    <p className="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Talented, Professional & Expert Team</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>We Build and Activate Brands</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay up opacity-7">
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

export default FAQS;
