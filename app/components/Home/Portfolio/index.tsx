'use client'

import React, { useRef } from 'react'
import data from '@/app/lib/data.json'
import classes from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/app/ui/Button'
import { Icon } from '@iconify/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface Items {
  title: string
  link: string
  client: string
  thumbnail: string
  id: number
  isUnoptimized: boolean
}

interface Data {
  portfolio: {
    items: Items[]
  }
}

function Portfolio() {
  // @ts-ignore
  const portfolioItems: Data = data

  const title = useRef<HTMLElement | any>()
  const main = useRef<HTMLElement | any>()

  useGSAP(() => {
    gsap.to(title.current, {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: main.current,
      },
    })
  })

  return (
    <div className="container flex flex-col items-center space-y-12 py-12" ref={main}>
      <h2 className={classes.title} ref={title}>
        Ukázky mých realizovaných projektů
      </h2>

      <div className={classes.main}>
        {portfolioItems.portfolio.items.map((item, index) => (
          <div key={index} className={classes.item}>
            <div>
              <div className={`${classes.itemWrapper} group`}>
                <Image
                  src={item.thumbnail}
                  width={500}
                  height={500}
                  alt={item.title}
                  unoptimized={item.isUnoptimized}
                />

                <div
                  className={`${classes.descriptionWrapper} group-hover:opacity-100 group-hover:translate-y-0`}
                >
                  <div>
                    <h5 className={classes.subtitle}>{item.title}</h5>
                    <p className={classes.client}>{item.client}</p>
                  </div>

                  <Link href={item.link} className={classes.showMore}>
                    <Icon icon="solar:arrow-right-down-linear" className={classes.showMoreIcon} />
                    <span className={classes.showMoreText}>Zobrazit více</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button href="/portfolio" label="Všechny realizace" appearance="outline" icon />
    </div>
  )
}

export default Portfolio
