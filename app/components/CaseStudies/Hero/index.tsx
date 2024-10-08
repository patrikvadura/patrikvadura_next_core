'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function CaseStudiesHero() {
  const main = useRef<HTMLElement | any>()
  const inner = useRef<HTMLElement | any>()

  //@ts-ignore
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(main.current, { y: 200 }, { y: 0 }, '+=2.5')
    tl.fromTo(inner.current, { opacity: 0, translateY: 40 }, { opacity: 1, translateY: 0 }, '-=0')

    // Cleanup function
    return () => tl.kill()
  }, [])

  const currentYear = new Date().getFullYear()
  const yearExperience = currentYear - 2014

  return (
    <div className="relative header py-32 overflow-hidden" ref={main}>
      <Image
        src="/assets/img/portfolio/rychle-berle/test.gif"
        width={1600}
        height={900}
        alt="Rychlé berle"
        className={classes.bgImage}
      />

      <div className="absolute bottom-0 left-0 w-full h-[50vh] z-10 bg-gradient-to-t from-white/10 to-transparent backdrop-blur" />

      <div className="container px-6 md:px-0 pt-4 md:pt-12 ontop !z-20" ref={inner}>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="basis-3/3 md:basis-4/5">
            <div className="caption">
              <h1 className={classes.title}>
                Váš partner pro vizuální komunikaci a podporu vaší značky{' '}
                <Link href="/portfolio" className={classes.subtitle}>
                  Prozkoumejte moji práci
                </Link>
              </h1>
              <div className="flex flex-col md:flex-row mt-8 items-center">
                <div className="basis-3/3 lg:basis-2/5">
                  <Link href="#wrapper">
                    <div className={classes.circleButton}>
                      <div className={`${classes.circleButtonRotateCircle}`}>
                        <svg className="textcircle" viewBox="0 0 500 500">
                          <defs>
                            <path
                              id="textcircle"
                              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                            ></path>
                          </defs>
                          <text>
                            <textPath xlinkHref="#textcircle" textLength="900">
                              Zjistěte více - Zjistěte více -
                            </textPath>
                          </text>
                        </svg>
                      </div>

                      <div className={`${classes.circleButtonIcon} group`}>
                        <Icon
                          icon="ph:arrow-down-right"
                          className="text-[40px] group-hover:text-[50px] transition-all duration-300 ease-in-out"
                        />
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="basis-3/3 lg:basis-3/5">
                  <p className={classes.description}>
                    Jsem tu, abych vám pomohl komunikovat váš brand s&nbsp;maximálním dopadem.
                    Spolehněte se na moje zkušenosti a&nbsp;kreativitu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${classes.sideNumbers} flex flex-row justify-start space-x-8 basis-3/3 md:basis-1/5`}
          >
            <div>
              <h2 className="opacity-50">+300</h2>
              <h6 className="sub-title fw-300 mt-10">Realizovaných projektů</h6>
            </div>

            <div>
              <h2 className="opacity-50">{yearExperience} let</h2>
              <h6 className="sub-title fw-300 mt-10">Zkušeností v oboru</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesHero
