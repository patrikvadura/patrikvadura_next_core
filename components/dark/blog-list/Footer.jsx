'use client'
import React, { useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

function Footer() {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' })
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      })
    }
  }, [])
  return (
    <footer className="modern-footer sub-bg pt-80">
      <div className="footer-container">
        <div className="container ontop">
          <div className="info-comp d-flex align-items-center justify-content-center pt-40 pb-40 bord-thin-bottom">
            <div className="mr-30">
              <span className="icon main-color mr-10 ti-email"></span>
              <span className="text">info@patrikvadura.cz</span>
            </div>
            <div className="mr-30">
              <span className="icon main-color mr-10 ti-mobile"></span>
              <span className="text">+420 725 007 655</span>
            </div>
            <div>
              <span className="icon main-color mr-10 ti-location-pin"></span>
              <span className="text">Stojanova 508, 686 01 Uherské Hradiště</span>
            </div>
          </div>

          <div className="row sub-footer mt-40 pt-25 pb-25 main-bg radius-30 padding-rl-30">
            <div className="col-lg-4 col-md-6 md-mb15">
              <ul className="rest d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="https://www.facebook.com/PatrikVaduraPage" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-30">
                  <a
                    href="https://www.linkedin.com/in/patrik-vaďura-763380173/"
                    className="hover-anim"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-30">
                  <a href="https://www.instagram.com/vaduradesign/" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-md-3">
              <div className="text-center">
                <p className="text-white text-[13px] text-opacity-50 hover:opacity-100">
                  © 2024 Patrik Vaďura |{' '}
                  <a href="https://patrikvadura.cz" className="" target="_blank">
                    Powered by{' '}
                    <svg
                      height={12}
                      fill="#fff"
                      className="inline opacity-50"
                      viewBox="0 0 274 164"
                    >
                      <path d="M184 164H94L0 0h90l94 164Zm-47-82 47-82h90l-47 82h-90Z" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 md-mb15 order-md-2">
              <div className="links d-flex justify-content-end">
                <ul className="rest d-flex align-items-center space-x-6">
                  <li>
                    <a href="/technology">Technologie</a>
                  </li>
                  <li>
                    <a href="/career">Kariéra</a>
                  </li>
                  <li>
                    <a href="/wikipedie">Wikipedie</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
