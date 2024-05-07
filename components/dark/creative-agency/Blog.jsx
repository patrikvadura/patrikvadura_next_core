'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Blog() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="blog-list-crev section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Blog</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Read Latest <span className="fw-200">News</span>
            </h2>
            <div className="ml-auto">
              <a href="/dark/blog-list" className="go-more">
                <span className="text">View all posts</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="item sub-bg2 wow fadeInUp" data-wow-delay=".1s">
          <div className="row">
            <div className="col-lg-3">
              <div className="info md-mb30">
                <div className="d-flex align-items-center">
                  <div className="author">
                    <div className="img">
                      <img src="/dark/assets/imgs/blog/author.png" alt="" />
                    </div>
                  </div>
                  <div className="author-info">
                    <span className="fz-13 opacity-8 mb-5">Posted by</span>
                    <h6 className="fz-18">Olivia Rhye</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cont">
                <h5 className="mb-10 underline">
                  <a href="/dark/blog-details">
                    The Highly Creative UI/UX Workflow from a Silicon Valley.
                  </a>
                </h5>
                <div className="tags">
                  <a href="/dark/blog-classic">Design</a>
                  <a href="/dark/blog-classic">Marketing</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-end">
              <div className="ml-auto">
                <span className="date sub-title fz-13 opacity-8 mb-30">
                  6 August 2022
                </span>
              </div>
            </div>
          </div>
          <div
            className="background bg-img valign text-center"
            data-background="/dark/assets/imgs/blog/blog1.jpg"
            data-overlay-dark="4"
          >
            <div className="more ontop full-width">
              <a href="/dark/blog-details">
                <span>
                  Read More <i className="fas fa-arrow-right ml-10"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="item wow fadeInUp" data-wow-delay=".3s">
          <div className="row">
            <div className="col-lg-3">
              <div className="info md-mb30">
                <div className="d-flex align-items-center">
                  <div className="author">
                    <div className="img">
                      <img src="/dark/assets/imgs/blog/author.png" alt="" />
                    </div>
                  </div>
                  <div className="author-info">
                    <span className="fz-13 opacity-8 mb-5">Posted by</span>
                    <h6 className="fz-18">Olivia Rhye</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cont">
                <h5 className="mb-10 underline">
                  <a href="/dark/blog-details">
                    Creativo Jóvenes: a Lead Designer&#39;s UI/UX Core
                    Checklist.
                  </a>
                </h5>
                <div className="tags">
                  <a href="/dark/blog-classic">Design</a>
                  <a href="/dark/blog-classic">Marketing</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-end">
              <div className="ml-auto">
                <span className="date sub-title fz-13 opacity-8 mb-30">
                  6 August 2022
                </span>
              </div>
            </div>
          </div>
          <div
            className="background bg-img valign text-center"
            data-background="/dark/assets/imgs/blog/blog2.jpg"
            data-overlay-dark="4"
          >
            <div className="more ontop full-width">
              <a href="/dark/blog-details">
                <span>
                  Read More <i className="fas fa-arrow-right ml-10"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="item sub-bg2 wow fadeInUp" data-wow-delay=".5s">
          <div className="row">
            <div className="col-lg-3">
              <div className="info md-mb30">
                <div className="d-flex align-items-center">
                  <div className="author">
                    <div className="img">
                      <img src="/dark/assets/imgs/blog/author.png" alt="" />
                    </div>
                  </div>
                  <div className="author-info">
                    <span className="fz-13 opacity-8 mb-5">Posted by</span>
                    <h6 className="fz-18">Olivia Rhye</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cont">
                <h5 className="mb-10 underline">
                  <a href="/dark/blog-details">
                    Definitive Guide to Make a Daily More Productive Working
                    Flow.
                  </a>
                </h5>
                <div className="tags">
                  <a href="/dark/blog-classic">Design</a>
                  <a href="/dark/blog-classic">Marketing</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-end">
              <div className="ml-auto">
                <span className="date sub-title fz-13 opacity-8 mb-30">
                  6 August 2022
                </span>
              </div>
            </div>
          </div>
          <div
            className="background bg-img valign text-center"
            data-background="/dark/assets/imgs/blog/blog4.jpg"
            data-overlay-dark="4"
          >
            <div className="more ontop full-width">
              <a href="/dark/blog-details">
                <span>
                  Read More <i className="fas fa-arrow-right ml-10"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
