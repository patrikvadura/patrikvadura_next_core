'use client'
import React, { useEffect, useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleScroll() {
    const bodyScroll = window.scrollY
    const navbar = document.querySelector('.navbar')

    if (bodyScroll > 300) navbar.classList.add('nav-scroll')
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
      if (document.querySelector('.hamenu').classList.contains('open')) {
        document.querySelector('.hamenu').style.left = '0'
      } else {
        document.querySelector('.hamenu').style.left = '-100%'
      }
    }, 300)
  }

  function closeMenu() {
    const hamenu = document.querySelector('.hamenu')

    setIsOpen(false)
    setTimeout(() => {
      hamenu.style.left = '-100%'
    }, 300)
  }

  function handleMouseEnter(event) {
    document.querySelectorAll('ul.main-menu li').forEach(item => {
      item.classList.add('hoverd')
    })
    event.currentTarget.classList.remove('hoverd')
  }

  function handleMouseLeave() {
    document.querySelectorAll('ul.main-menu li').forEach(item => item.classList.remove('hoverd'))
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector('.sub-menu')
    const SubMenu2 = event.currentTarget.querySelector('.sub-menu2')
    if (subMenu) {
      if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach(item => {
          item.classList.remove('sub-open')
          item.style.maxHeight = '0'
          item.previousElementSibling.children[0].classList.remove('dopen')
        })
        subMenu.classList.remove('sub-open')
        subMenu.style.maxHeight = '0'
        subMenu.previousElementSibling.children[0].classList.remove('dopen')
      } else if (!subMenu.classList.contains('sub-open')) {
        if (SubMenu2 == null) {
          document.querySelectorAll('.sub-menu').forEach(item => {
            item.classList.remove('sub-open')
            item.style.maxHeight = '0'
            item.previousElementSibling.children[0].classList.remove('dopen')
          })

          subMenu.classList.add('sub-open')
          subMenu.style.maxHeight = '450px'
          subMenu.previousElementSibling.children[0].classList.add('dopen')
        } else {
          subMenu.classList.add('sub-open')
          subMenu.style.maxHeight = '450px'
          subMenu.previousElementSibling.children[0].classList.add('dopen')
        }
      }
    }
  }
  function toggleSubMenu2(event) {
    const SubMenu2 = event.currentTarget.querySelector('.sub-menu2')
    if (SubMenu2) {
      if (SubMenu2.classList.contains('sub-open')) {
        event.currentTarget.querySelectorAll('.sub-menu2').forEach(item => {
          item.classList.remove('sub-open')
          item.style.maxHeight = '0'
          item.previousElementSibling.children[0].classList.remove('dopen')
        })
        SubMenu2.classList.remove('sub-open')
        SubMenu2.style.maxHeight = '0'
        SubMenu2.previousElementSibling.children[0].classList.remove('dopen')
      } else if (!SubMenu2.classList.contains('sub-open')) {
        event.currentTarget.querySelectorAll('.sub-menu2').forEach(item => {
          item.classList.remove('sub-open')
          item.style.maxHeight = '0'
          item.previousElementSibling.children[0].classList.remove('dopen')
        })
        SubMenu2.classList.add('sub-open')
        SubMenu2.style.maxHeight = '450px'
        SubMenu2.previousElementSibling.children[0].classList.add('dopen')
      }
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-15">
        <div className="container">
          <a className="logo icon-img-100" href="#">
            <svg width={120} fill="#fff" viewBox="0 0 997 187">
              <path d="M209 187H107L0 0h102l107 187Zm-53-94 54-93h102l-53 93H156ZM435 163h-23L370 63h24l30 74 29-74h24l-42 100Zm85 2c-12 0-21-2-28-8-7-5-10-12-10-21 0-11 4-18 12-23 7-4 18-7 31-8a14671 14671 0 0 1 22-5c3-1 4-3 4-6 0-5-2-9-5-12-4-2-9-4-15-4-7 0-12 2-17 5-4 3-7 7-7 13h-23c1-7 3-14 7-19 4-6 10-10 17-13s14-4 23-4c13 0 24 3 31 9 7 7 11 16 11 27v45c0 3 2 5 5 5h5v17h-10c-5 0-9-1-12-3s-5-5-6-9l-1-3c-6 11-18 17-34 17Zm4-17c8 0 15-3 20-7s7-9 7-16v-14c-1 3-4 5-8 6l-16 3c-8 1-13 2-17 4s-6 5-6 10c0 4 2 8 5 10 4 2 9 4 15 4Zm115 18a44 44 0 0 1-40-26c-4-8-6-17-6-28 0-10 2-19 6-27s9-14 16-19c7-4 15-6 24-6 7 0 13 1 19 4 6 2 10 6 14 11V21h22v142h-18l-2-18c-3 7-7 12-13 15-6 4-13 6-22 6Zm5-19c5 0 10-2 14-4 4-3 8-8 10-13s4-11 4-18c0-10-3-18-8-24s-12-10-20-10-15 4-20 10c-6 6-8 14-8 24 0 11 2 19 8 25 5 7 11 10 20 10Zm109 19c-12 0-21-3-28-10-6-7-10-16-10-27V63h23v65c0 6 2 10 5 13 4 4 9 5 15 5 7 0 13-2 17-6 5-5 7-10 7-17V63h23v100h-18l-2-15c-3 6-7 10-13 13s-12 5-19 5Zm74-3V63h18l3 19c7-14 18-20 35-20h4v21h-4c-11 0-19 3-25 8-5 6-8 13-8 22v50h-23Zm106 2c-12 0-21-2-28-8-7-5-10-12-10-21 0-11 4-18 12-23 7-4 18-7 31-8a14671 14671 0 0 1 22-5c3-1 4-3 4-6 0-5-2-9-5-12-4-2-9-4-15-4-7 0-12 2-17 5-4 3-7 7-7 13h-23c1-7 3-14 7-19 4-6 10-10 17-13s14-4 23-4c13 0 24 3 31 9 7 7 11 16 11 27v45c0 3 2 5 5 5h5v17h-10c-5 0-9-1-12-3s-5-5-6-9l-1-3c-6 11-18 17-34 17Zm4-17c8 0 15-3 20-7s7-9 7-16v-14c-1 3-4 5-8 6l-16 3c-8 1-13 2-17 4s-6 5-6 10c0 4 2 8 6 10 3 2 8 4 14 4Z" />
            </svg>
          </a>

          <div className="topnav">
            <div onClick={toggleMenu} className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`hamenu ${isOpen == true ? 'open' : ''}`}>
        <div className="logo icon-img-100">
          <img src="/dark/assets/imgs/logo-light.png" alt="" />
        </div>
        <div onClick={closeMenu} className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Home">
                          Home
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="/dark/home-main" className="sub-link">
                            Main Home
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-startup-onepage" className="sub-link">
                            Modern Startup
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-creative-agency" className="sub-link">
                            Creative Agency
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-modern-agency" className="sub-link">
                            Modern Agency
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-creative-portfolio" className="sub-link">
                            Creative Portfolio
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-digital-agency" className="sub-link">
                            Digital Agency
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-freelancer" className="sub-link">
                            Freelancer
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-personal-vcard" className="sub-link">
                            Personal vCard
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-minimal-portfolio" className="sub-link">
                            Minimal Portfolio
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-asymmetric-portfolio" className="sub-link">
                            Asymmetric Portfolio
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Pages">
                          Pages
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="About Us">
                                About Us
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-about" className="sub-link">
                                  About Us v1
                                </a>
                              </li>
                              <li>
                                <a href="/dark/page-about2" className="sub-link">
                                  About Us v2
                                </a>
                              </li>
                              <li>
                                <a href="/dark/page-about3" className="sub-link">
                                  About Us v3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Services">
                                Services
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-services" className="sub-link">
                                  Services v1
                                </a>
                              </li>
                              <li>
                                <a href="/dark/page-services2" className="sub-link">
                                  Services v2
                                </a>
                              </li>
                              <li>
                                <a href="/dark/page-services-details" className="sub-link">
                                  Services Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Contact">
                                Contact
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-contact" className="sub-link">
                                  Contact v1
                                </a>
                              </li>
                              <li>
                                <a href="/dark/page-contact2" className="sub-link">
                                  Contact v2
                                </a>
                              </li>
                              <li>
                                <a href="/dark/page-contact3" className="sub-link">
                                  Contact v3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Team">
                                Team
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-team" className="sub-link">
                                  Our Team
                                </a>
                              </li>
                              <li>
                                <a href="/dark/page-team-single" className="sub-link">
                                  Team Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Others">
                                Others
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/page-FAQS" className="sub-link">
                                  FAQS
                                </a>
                              </li>
                              <li>
                                <a href="/dark/page-error-404" className="sub-link">
                                  Error 404
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Portfolio">
                          Portfolio
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu no-bord">
                      <ul>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Portfolio Type">
                                Portfolio Type
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/portfolio-standard" className="sub-link">
                                  Standerd
                                </a>
                              </li>
                              <li>
                                <a href="/dark/portfolio-gallery" className="sub-link">
                                  Gallery
                                </a>
                              </li>
                              <li>
                                <a href="/dark/portfolio-metro" className="sub-link">
                                  Metro
                                </a>
                              </li>
                              <li>
                                <a href="/dark/masonry" className="sub-link">
                                  Masonry
                                </a>
                              </li>
                              <li>
                                <a href="/dark/portfolio-caption-curso" className="sub-link">
                                  Caption Cursor
                                </a>
                              </li>
                              <li>
                                <a href="/dark/outline" className="sub-link">
                                  Outline
                                </a>
                              </li>
                              <li>
                                <a href="/dark/portfolio-parallax" className="sub-link">
                                  Parallax
                                </a>
                              </li>
                              <li>
                                <a href="/dark/portfolio-sticky" className="sub-link">
                                  Sticky
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Showcases">
                                Showcases
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/showcase-fullscreen" className="sub-link">
                                  Parallax Slider
                                </a>
                              </li>
                              <li>
                                <a href="/dark/showcase-carousel" className="sub-link">
                                  Showcase Carousel
                                </a>
                              </li>
                              <li>
                                <a href="/dark/showcase-half-slider" className="sub-link">
                                  Creative Slider
                                </a>
                              </li>
                              <li>
                                <a href="/dark/showcase-interactive-full" className="sub-link">
                                  Interactive Full
                                </a>
                              </li>
                              <li>
                                <a href="/dark/showcase-interactive-center" className="sub-link">
                                  Interactive Center
                                </a>
                              </li>
                              <li>
                                <a href="/dark/showcase-interactive-vertical" className="sub-link">
                                  Interactive Vertical
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Portfolio Single">
                                Portfolio Single
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/dark/project1" className="sub-link">
                                  project1
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project2" className="sub-link">
                                  project2
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project3" className="sub-link">
                                  project3
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project4" className="sub-link">
                                  project4
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project5" className="sub-link">
                                  project5
                                </a>
                              </li>
                              <li>
                                <a href="/dark/project6" className="sub-link">
                                  project6
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Blogs">
                          Blogs
                        </span>{' '}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a className="sub-link" href="/dark/blog-classic">
                            Standard
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blog-list">
                            Blog List
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blog-list2">
                            Blog List 2
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/dark/blog-details">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <a href="/dark/page-contact3" className="link">
                        <span className="fill-text" data-text="Contact Us">
                          Contact Us
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
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
