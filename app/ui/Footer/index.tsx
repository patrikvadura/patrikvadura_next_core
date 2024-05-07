'use client'
import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Footer() {
  const main = useRef<HTMLElement | any>()

  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set(main.current, { yPercent: -50 })

      const uncover = gsap.timeline({ paused: true })

      uncover.to(main.current, { yPercent: 0, ease: 'none' })

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
    <footer className={classes.main}>
      <div className={`${classes.onTop} container`} ref={main}>
        <div className={classes.contact}>
          <div className={classes.contactItem}>
            <Icon icon="gravity-ui:envelope" className={classes.contactIcon} />
            <a href="mailto:info@patrikvadura.cz">info@patrikvadura.cz</a>
          </div>

          <div className={classes.contactItem}>
            <Icon icon="solar:phone-calling-rounded-linear" className={classes.contactIcon} />
            <a href="tel:+420 725 007 655">+420 725 007 655</a>
          </div>

          <div className={classes.contactItem}>
            <Icon icon="material-symbols:location-on-outline" className={classes.contactIcon} />
            Stojanova 508, 686 01 Uherské Hradiště
          </div>
        </div>

        <div className="flex mt-8 pt-8 pb-8 px-8 bg-primary-dark rounded-[2rem]">
          <div className={`${classes.social} basis-1/3`}>
            <a href="https://www.facebook.com/PatrikVaduraPage" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/patrik-vaďura-763380173/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/vaduradesign/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <div className="basis-1/3">
            <p className={classes.copyright}>
              © 2024 Patrik Vaďura |{' '}
              <a href="https://patrikvadura.cz" target="_blank">
                Powered by{' '}
                <svg height={12} viewBox="0 0 274 164">
                  <path d="M184 164H94L0 0h90l94 164Zm-47-82 47-82h90l-47 82h-90Z" />
                </svg>
              </a>
            </p>
          </div>

          <div className={`${classes.links} basis-1/3`}>
            <a href="/technology" target="_self">
              Technologie
            </a>
            <a href="/career" target="_self">
              Kariéra
            </a>
            <a href="/wikipedie" target="_self">
              Wikipedie
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
