'use client'

import React, { useEffect, useRef } from 'react'

import { Icon } from '@iconify/react'
import classes from './index.module.scss'

const ProgressScroll = () => {
  const progressRef = useRef<HTMLElement | any>()
  const pathRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    let offset = 150
    let progressWrap = progressRef.current
    let progressPath = pathRef.current
    let pathLength: any
    if (progressPath) {
      pathLength = progressPath.getTotalLength()
    }
    const updateProgress = () => {
      if (!pathLength) return
      let height = document.documentElement.scrollHeight - window.innerHeight
      //@ts-ignore
      progressPath.style.strokeDashoffset = pathLength - (window.scrollY * pathLength) / height
    }
    if (progressWrap && progressPath) {
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
      progressPath.style.strokeDashoffset = pathLength
      progressPath.getBoundingClientRect()

      updateProgress()
      window.addEventListener('scroll', updateProgress)
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > offset) {
          progressWrap.classList.add(classes.active)
        } else {
          progressRef.current.classList.remove(classes.active)
        }
      })
      //@ts-ignore
      progressWrap.addEventListener('click', function (event) {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return false
      })
    }
  }, [])

  return (
    <div className={`${classes.progressWrap} progress-wrap`} ref={progressRef}>
      <svg className={classes.progressCircle} width="100%" height="100%" viewBox="-1 -1 102 102">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <Icon icon="material-symbols:arrow-upward-rounded" className={classes.icon} />
    </div>
  )
}

export default ProgressScroll
