'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import data from '@/app/lib/data.json'
import classes from './index.module.scss'

interface Items {
  title: string
  link: string
  client: string
  thumbnail: string
  id: number
}

interface Data {
  portfolio: {
    items: Items[]
  }
}

function Portfolio() {
  const portfolioItems: Data = data

  return (
    <section>
      <div className="container pb-12">
        <div className="flex flex-row space-x-4 w-full overflow-hidden">
          {portfolioItems.portfolio.items.map((item, index) => (
            <div key={index} className={classes.item}>
              <div>
                <div className={`${classes.itemWrapper} group`}>
                  <Image src={item.thumbnail} width={500} height={500} alt={item.title} />
                  <div
                    className={`${classes.descriptionWrapper} group-hover:opacity-100 group-hover:translate-y-0`}
                  >
                    <div>
                      <h5 className={classes.title}>{item.title}</h5>
                      <p className={classes.client}>{item.client}</p>
                    </div>

                    <Link href={item.link} className="flex space-x-2">
                      <Icon icon="solar:arrow-right-down-linear" className="text-2xl" />
                      <span className="underline tracking-wide">Zobrazit více</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
