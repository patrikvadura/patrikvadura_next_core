'use client'

import React, { useEffect, useRef } from 'react'
import classes from './index.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Cursor() {
  const cursorRef = useRef<HTMLElement | any>()

  useEffect(() => {
    const link = document.querySelectorAll('.hover-this')
    const cursor = cursorRef.current

    //@ts-ignore
    const animateit = function (e) {
      //@ts-ignore
      const hoverAnim = this.querySelector('.hover-anim')
      const { offsetX: x, offsetY: y } = e
      //@ts-ignore
      const { offsetWidth: width, offsetHeight: height } = this
      const move = 25
      const xMove = (x / width) * (move * 2) - move
      const yMove = (y / height) * (move * 2) - move

      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`
      if (e.type === 'mouseleave') hoverAnim.style.transform = ''
    }

    //@ts-ignore
    const editCursor = e => {
      const { clientX: x, clientY: y } = e
      //@ts-ignore
      cursor.style.left = x + 'px'
      //@ts-ignore
      cursor.style.top = y + 'px'
    }
    link.forEach(b => b.addEventListener('mousemove', animateit))
    link.forEach(b => b.addEventListener('mouseleave', animateit))
    window.addEventListener('mousemove', editCursor)

    document.querySelectorAll('a, .cursor-pointer').forEach(el => {
      el.addEventListener('mousemove', () => {
        //@ts-ignore
        cursor.classList.add(classes.cursorActive)
      })
      el.addEventListener('mouseleave', () => {
        //@ts-ignore
        cursor.classList.remove(classes.cursorActive)
      })
    })
  }, [])

  return <div className={classes.cursor} ref={cursorRef}></div>
}

export default Cursor
