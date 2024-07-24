'use client'
import React, { useRef } from 'react'
import classes from './index.module.scss'
import { Check } from '@/app/ui/Icons/Check'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Services() {
  const title = useRef<HTMLElement | any>()
  const subtitle = useRef<HTMLElement | any>()
  const main = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(title.current, {
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: main.current,
      },
    })

    gsap.to(subtitle.current, {
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: main.current,
      },
    })
  })

  return (
    <section className={`${classes.main} services-dots`}>
      <div className="container" ref={main}>
        <div className={classes.headings}>
          <h6 className={classes.subtitle} ref={subtitle}>
            Nabídka služeb
          </h6>

          <h2 className={classes.title} ref={title}>
            S čím vám mohu pomoci?
          </h2>
        </div>

        <div className={classes.items}>
          <div className={classes.item}>
            <h4 className={classes.itemDisplay}>V</h4>
            <h5 className={classes.itemTitle}>Vizuální identita</h5>

            <div className="space-y-8">
              <p>Help increase the traffic into your business via marketing online & offline.</p>

              <ul className="space-y-2">
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" /> Website Design
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" /> UI/UX Design
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" />
                  Mobile App Development
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" />
                  Animations
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.item}>
            <h4 className={classes.itemDisplay}>V</h4>
            <h5 className={classes.itemTitle}>Vizuální identita</h5>

            <div className="space-y-8">
              <p>Help increase the traffic into your business via marketing online & offline.</p>

              <ul className="space-y-2">
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" /> Website Design
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" /> UI/UX Design
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" />
                  Mobile App Development
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" />
                  Animations
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.item}>
            <h4 className={classes.itemDisplay}>V</h4>
            <h5 className={classes.itemTitle}>Vizuální identita</h5>

            <div className="space-y-8">
              <p>Help increase the traffic into your business via marketing online & offline.</p>

              <ul className="space-y-2">
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" /> Website Design
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" /> UI/UX Design
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" />
                  Mobile App Development
                </li>
                <li className="flex flex-row">
                  <Check size={24} className="!stroke-secondary mr-2" />
                  Animations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
