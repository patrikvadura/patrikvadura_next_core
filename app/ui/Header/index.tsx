'use client'
import data from '@/app/lib/data.json'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import classes from './index.module.scss'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface Submenu {
  title: string
  link: string
  id: number
}

interface Items {
  submenu: Submenu[]
  title: string
  link: string
  id: number
}

interface Data {
  menu: {
    items: Items[]
  }
}

function Navbar() {
  // @ts-ignore
  const menuItems: Data = data

  const [isOpen, setIsOpen] = useState(false)

  function handleScroll() {
    const bodyScroll = window.scrollY
    const navbar = document.querySelector('.navbar')

    //@ts-ignore
    if (bodyScroll > 300) navbar.classList.add('nav-scroll')
    //@ts-ignore
    else navbar.classList.remove('nav-scroll')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function toggleMenu() {
    const hamenu = document.querySelector('.hamenu')

    setIsOpen(prev => !prev)

    setTimeout(() => {
      //@ts-ignore
      if (document.querySelector('.hamenu').classList.contains('open')) {
        //@ts-ignore
        document.querySelector('.hamenu').style.left = '0'
      } else {
        //@ts-ignore
        document.querySelector('.hamenu').style.left = '-100%'
      }
    }, 300)
  }

  function closeMenu() {
    const hamenu = document.querySelector('.hamenu')

    setIsOpen(false)
    setTimeout(() => {
      //@ts-ignore
      hamenu.style.left = '-100%'
    }, 300)
  }

  //@ts-ignore
  function handleMouseEnter(event) {
    document.querySelectorAll('ul.main-menu li').forEach(item => {
      item.classList.add('hoverd')
    })
    event.currentTarget.classList.remove('hoverd')
  }

  function handleMouseLeave() {
    document.querySelectorAll('ul.main-menu li').forEach(item => item.classList.remove('hoverd'))
  }

  //@ts-ignore
  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector('.sub-menu')
    if (subMenu) {
      if (subMenu.classList.contains('sub-open')) {
        document.querySelectorAll('.sub-menu').forEach(item => {
          item.classList.remove('sub-open')
          //@ts-ignore
          item.style.opacity = '0'
          //@ts-ignore
          item.style.maxHeight = '0'
          //@ts-ignore
          item.previousElementSibling.children[0].classList.remove('dopen')
        })
        subMenu.classList.remove('sub-open')
        //@ts-ignore
        subMenu.style.opacity = '0'
        subMenu.style.maxHeight = '0'
        subMenu.previousElementSibling.children[0].classList.remove('dopen')
      } else if (!subMenu.classList.contains('sub-open')) {
        subMenu.classList.add('sub-open')
        //@ts-ignore
        subMenu.style.opacity = '1'
        subMenu.style.maxHeight = '450px'
        subMenu.previousElementSibling.children[0].classList.add('dopen')
      }
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg py-8">
        <div className="container px-4 lg:px-0 py-6 flex justify-between items-center">
          <a href="/" target="_self">
            <svg width={120} fill="#fff" viewBox="0 0 997 187">
              <path d="M209 187H107L0 0h102l107 187Zm-53-94 54-93h102l-53 93H156ZM435 163h-23L370 63h24l30 74 29-74h24l-42 100Zm85 2c-12 0-21-2-28-8-7-5-10-12-10-21 0-11 4-18 12-23 7-4 18-7 31-8a14671 14671 0 0 1 22-5c3-1 4-3 4-6 0-5-2-9-5-12-4-2-9-4-15-4-7 0-12 2-17 5-4 3-7 7-7 13h-23c1-7 3-14 7-19 4-6 10-10 17-13s14-4 23-4c13 0 24 3 31 9 7 7 11 16 11 27v45c0 3 2 5 5 5h5v17h-10c-5 0-9-1-12-3s-5-5-6-9l-1-3c-6 11-18 17-34 17Zm4-17c8 0 15-3 20-7s7-9 7-16v-14c-1 3-4 5-8 6l-16 3c-8 1-13 2-17 4s-6 5-6 10c0 4 2 8 5 10 4 2 9 4 15 4Zm115 18a44 44 0 0 1-40-26c-4-8-6-17-6-28 0-10 2-19 6-27s9-14 16-19c7-4 15-6 24-6 7 0 13 1 19 4 6 2 10 6 14 11V21h22v142h-18l-2-18c-3 7-7 12-13 15-6 4-13 6-22 6Zm5-19c5 0 10-2 14-4 4-3 8-8 10-13s4-11 4-18c0-10-3-18-8-24s-12-10-20-10-15 4-20 10c-6 6-8 14-8 24 0 11 2 19 8 25 5 7 11 10 20 10Zm109 19c-12 0-21-3-28-10-6-7-10-16-10-27V63h23v65c0 6 2 10 5 13 4 4 9 5 15 5 7 0 13-2 17-6 5-5 7-10 7-17V63h23v100h-18l-2-15c-3 6-7 10-13 13s-12 5-19 5Zm74-3V63h18l3 19c7-14 18-20 35-20h4v21h-4c-11 0-19 3-25 8-5 6-8 13-8 22v50h-23Zm106 2c-12 0-21-2-28-8-7-5-10-12-10-21 0-11 4-18 12-23 7-4 18-7 31-8a14671 14671 0 0 1 22-5c3-1 4-3 4-6 0-5-2-9-5-12-4-2-9-4-15-4-7 0-12 2-17 5-4 3-7 7-7 13h-23c1-7 3-14 7-19 4-6 10-10 17-13s14-4 23-4c13 0 24 3 31 9 7 7 11 16 11 27v45c0 3 2 5 5 5h5v17h-10c-5 0-9-1-12-3s-5-5-6-9l-1-3c-6 11-18 17-34 17Zm4-17c8 0 15-3 20-7s7-9 7-16v-14c-1 3-4 5-8 6l-16 3c-8 1-13 2-17 4s-6 5-6 10c0 4 2 8 6 10 3 2 8 4 14 4Z" />
            </svg>
          </a>

          <div className="topnav">
            <div onClick={toggleMenu} className="cursor-pointer">
              <Icon icon="gg:menu-right" className={classes.openIcon} />
            </div>
          </div>
        </div>
      </nav>

      <div className={`hamenu ${isOpen ? 'open' : ''}`}>
        <a href="/" className="absolute top-6 left-12" target="_self">
          <svg width={120} fill="#fff" viewBox="0 0 997 187">
            <path d="M209 187H107L0 0h102l107 187Zm-53-94 54-93h102l-53 93H156ZM435 163h-23L370 63h24l30 74 29-74h24l-42 100Zm85 2c-12 0-21-2-28-8-7-5-10-12-10-21 0-11 4-18 12-23 7-4 18-7 31-8a14671 14671 0 0 1 22-5c3-1 4-3 4-6 0-5-2-9-5-12-4-2-9-4-15-4-7 0-12 2-17 5-4 3-7 7-7 13h-23c1-7 3-14 7-19 4-6 10-10 17-13s14-4 23-4c13 0 24 3 31 9 7 7 11 16 11 27v45c0 3 2 5 5 5h5v17h-10c-5 0-9-1-12-3s-5-5-6-9l-1-3c-6 11-18 17-34 17Zm4-17c8 0 15-3 20-7s7-9 7-16v-14c-1 3-4 5-8 6l-16 3c-8 1-13 2-17 4s-6 5-6 10c0 4 2 8 5 10 4 2 9 4 15 4Zm115 18a44 44 0 0 1-40-26c-4-8-6-17-6-28 0-10 2-19 6-27s9-14 16-19c7-4 15-6 24-6 7 0 13 1 19 4 6 2 10 6 14 11V21h22v142h-18l-2-18c-3 7-7 12-13 15-6 4-13 6-22 6Zm5-19c5 0 10-2 14-4 4-3 8-8 10-13s4-11 4-18c0-10-3-18-8-24s-12-10-20-10-15 4-20 10c-6 6-8 14-8 24 0 11 2 19 8 25 5 7 11 10 20 10Zm109 19c-12 0-21-3-28-10-6-7-10-16-10-27V63h23v65c0 6 2 10 5 13 4 4 9 5 15 5 7 0 13-2 17-6 5-5 7-10 7-17V63h23v100h-18l-2-15c-3 6-7 10-13 13s-12 5-19 5Zm74-3V63h18l3 19c7-14 18-20 35-20h4v21h-4c-11 0-19 3-25 8-5 6-8 13-8 22v50h-23Zm106 2c-12 0-21-2-28-8-7-5-10-12-10-21 0-11 4-18 12-23 7-4 18-7 31-8a14671 14671 0 0 1 22-5c3-1 4-3 4-6 0-5-2-9-5-12-4-2-9-4-15-4-7 0-12 2-17 5-4 3-7 7-7 13h-23c1-7 3-14 7-19 4-6 10-10 17-13s14-4 23-4c13 0 24 3 31 9 7 7 11 16 11 27v45c0 3 2 5 5 5h5v17h-10c-5 0-9-1-12-3s-5-5-6-9l-1-3c-6 11-18 17-34 17Zm4-17c8 0 15-3 20-7s7-9 7-16v-14c-1 3-4 5-8 6l-16 3c-8 1-13 2-17 4s-6 5-6 10c0 4 2 8 6 10 3 2 8 4 14 4Z" />
          </svg>
        </a>

        <div className="cursor-pointer">
          <Icon onClick={closeMenu} icon="material-symbols:close" className={classes.closeIcon} />
        </div>

        <div className="container h-full">
          <div className="flex flex-col lg:flex-row">
            <div className="basis-1/1 lg:basis-2/3 lg:mr-8">
              <div className="menu-links">
                <ul className="main-menu">
                  {menuItems.menu.items.map((item, index) => (
                    <li
                      key={index}
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                      onClick={toggleSubMenu}
                    >
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <span className="fill-text" data-text={item.title}>
                            {item.title}
                          </span>{' '}
                          {item.submenu ? <i></i> : ''}
                        </div>
                      </div>

                      {item.submenu ? (
                        <div className="sub-menu no-bord">
                          <ul>
                            {item.submenu.map((submenuItem, index) => (
                              <li key={index}>
                                <div className="o-hidden">
                                  <div className="link cursor-pointer sub-dmenu">
                                    <a href={submenuItem.link} className="sub-link">
                                      {submenuItem.title}
                                    </a>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        ''
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="basis-1/1 lg:basis-1/3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    541 Melville Geek, <br /> Palo Alto, CA 94301
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="#0">Hello@email.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="#0">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
