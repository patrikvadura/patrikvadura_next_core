'use client';
import React from 'react';

function Challenge() {
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
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">
              The <br /> Challenge
            </h2>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="line-height-40">
                The goal is there are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don&apos;t
                look even slightly believable.
              </h5>
            </div>
            <div className="accordion bord mt-100">
              <div
                className="item active mb-15 wow fadeInUp"
                data-wow-delay=".1s"
              >
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
    </section>
  );
}

export default Challenge;
