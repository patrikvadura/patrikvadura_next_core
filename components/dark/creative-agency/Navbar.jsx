'use client';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function toggleSearch() {
    let form = document.querySelector('.navbar .search-form');
    let closeBtn = document.querySelector('.search-form .close-search');

    form.classList.toggle('open');
    if (form.classList.contains('open')) closeBtn.style.display = 'block';
    else closeBtn.style.display = 'none';
  }
  function toggleMenu() {
    const hamenu = document.querySelector('.hamenu');

    setIsOpen((prev) => !prev);

    setTimeout(() => {
      if (document.querySelector('.hamenu').classList.contains('open')) {
        document.querySelector('.hamenu').style.left = '0';
      } else {
        document.querySelector('.hamenu').style.left = '-100%';
      }
    }, 300);
  }

  function closeMenu() {
    const hamenu = document.querySelector('.hamenu');

    setIsOpen(false);
    setTimeout(() => {
      hamenu.style.left = '-100%';
    }, 300);
  }

  function handleMouseEnter(event) {
    document.querySelectorAll('ul.main-menu li').forEach((item) => {
      item.classList.add('hoverd');
    });
    event.currentTarget.classList.remove('hoverd');
  }

  function handleMouseLeave() {
    document
      .querySelectorAll('ul.main-menu li')
      .forEach((item) => item.classList.remove('hoverd'));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector('.sub-menu');
    const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
    if (subMenu) {
      if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        subMenu.classList.remove('sub-open');
        subMenu.style.maxHeight = '0';
        subMenu.previousElementSibling.children[0].classList.remove('dopen');
      } else if (!subMenu.classList.contains('sub-open')) {
        if (SubMenu2 == null) {
          document.querySelectorAll('.sub-menu').forEach((item) => {
            item.classList.remove('sub-open');
            item.style.maxHeight = '0';
            item.previousElementSibling.children[0].classList.remove('dopen');
          });

          subMenu.classList.add('sub-open');
          subMenu.style.maxHeight = '450px';
          subMenu.previousElementSibling.children[0].classList.add('dopen');
        } else {
          subMenu.classList.add('sub-open');
          subMenu.style.maxHeight = '450px';
          subMenu.previousElementSibling.children[0].classList.add('dopen');
        }
      }
    }
  }
  function toggleSubMenu2(event) {
    const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
    if (SubMenu2) {
      if (SubMenu2.classList.contains('sub-open')) {
        event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        SubMenu2.classList.remove('sub-open');
        SubMenu2.style.maxHeight = '0';
        SubMenu2.previousElementSibling.children[0].classList.remove('dopen');
      } else if (!SubMenu2.classList.contains('sub-open')) {
        event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        SubMenu2.classList.add('sub-open');
        SubMenu2.style.maxHeight = '450px';
        SubMenu2.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <a className="logo icon-img-100" href="#">
            <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Home</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/dark/home-main">
                    Main Home
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Modern Startup
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-creative-agency"
                  >
                    Creative Agency
                  </a>
                  <a className="dropdown-item" href="/dark/home-modern-agency">
                    Modern Agency
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-creative-portfolio"
                  >
                    Creative Portfolio
                  </a>
                  <a className="dropdown-item" href="/dark/home-digital-agency">
                    Digital Agency
                  </a>
                  <a className="dropdown-item" href="/dark/home-freelancer">
                    Freelancer
                  </a>
                  <a className="dropdown-item" href="/dark/home-personal-vcard">
                    Personal vCard
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-minimal-portfolio"
                  >
                    Minimal Portfolio
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-asymmetric-portfolio"
                  >
                    Asymmetric Portfolio
                  </a>
                </div>
              </li>
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Portfolio</span>
                </a>
                <div className="dropdown-menu mega-menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="clumn mb-80">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Portfolio Type
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-standard"
                              >
                                Standerd
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-gallery"
                              >
                                Gallery
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-metro"
                              >
                                Metro
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a className="dropdown-item" href="/dark/masonry">
                                Masonry
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-caption-curso"
                              >
                                Caption Cursor
                              </a>
                              <a className="dropdown-item" href="/dark/outline">
                                Outline
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-parallax"
                              >
                                Parallax
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/portfolio-sticky"
                              >
                                Sticky
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Showcases
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-fullscreen"
                              >
                                Parallax Slider
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-carousel"
                              >
                                Showcase Carousel
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-half-slider"
                              >
                                Creative Slider
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-interactive-full"
                              >
                                Interactive Full
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-interactive-center"
                              >
                                Interactive Center
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/showcase-interactive-vertical"
                              >
                                Interactive Vertical
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Portfolio Single
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/project1"
                              >
                                project1
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/project2"
                              >
                                project2
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/project3"
                              >
                                project3
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/project4"
                              >
                                project4
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/dark/project5"
                              >
                                project5
                              </a>
                              <a
                                className="dropdown-item"
                                href="/dark/project6"
                              >
                                project6
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Pages</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="#0">
                      About Us <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="/dark/page-about">
                          About Us 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/dark/page-about2">
                          About Us 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/dark/page-about3">
                          About Us 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="#0">
                      Services <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="/dark/page-services">
                          Services 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dark/page-services2"
                        >
                          Services 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/dark/page-services-details"
                        >
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="#0">
                      Contact Us{' '}
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="/dark/page-contact">
                          Contact Us 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/dark/page-contact2">
                          Contact Us 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/dark/page-contact3">
                          Contact Us 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/dark/page-team">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/dark/page-team-single">
                      Team Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/dark/page-FAQS">
                      FAQS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/dark/page-error-404">
                      Error 404
                    </a>
                  </li>
                </ul>
              </li>
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Blogs</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/dark/blog-classic">
                    Blog Standerd
                  </a>
                  <a className="dropdown-item" href="/dark/blog-list">
                    Blog List
                  </a>
                  <a className="dropdown-item" href="/dark/blog-list2">
                    Blog List 2
                  </a>
                  <a className="dropdown-item" href="/dark/blog-details">
                    Blog Details
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dark/page-contact">
                  <span className="rolling-text">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="search-form">
            <div className="form-group">
              <input type="text" name="search" placeholder="Search" />
              <button>
                <span className="pe-7s-search"></span>
              </button>
            </div>
            <div onClick={toggleSearch} className="search-icon">
              <span className="pe-7s-search open-search"></span>
              <span className="pe-7s-close close-search"></span>
            </div>
          </div>
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
        <div
          onClick={closeMenu}
          className="close-menu cursor-pointer ti-close"
        ></div>
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
                          <a
                            href="/dark/home-startup-onepage"
                            className="sub-link"
                          >
                            Modern Startup
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Creative Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-modern-agency"
                            className="sub-link"
                          >
                            Modern Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-portfolio"
                            className="sub-link"
                          >
                            Creative Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-digital-agency"
                            className="sub-link"
                          >
                            Digital Agency
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-freelancer" className="sub-link">
                            Freelancer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-personal-vcard"
                            className="sub-link"
                          >
                            Personal vCard
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-minimal-portfolio"
                            className="sub-link"
                          >
                            Minimal Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-asymmetric-portfolio"
                            className="sub-link"
                          >
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
                                <a
                                  href="/dark/page-about2"
                                  className="sub-link"
                                >
                                  About Us v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-about3"
                                  className="sub-link"
                                >
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
                                <a
                                  href="/dark/page-services"
                                  className="sub-link"
                                >
                                  Services v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-services2"
                                  className="sub-link"
                                >
                                  Services v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-services-details"
                                  className="sub-link"
                                >
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
                                <a
                                  href="/dark/page-contact"
                                  className="sub-link"
                                >
                                  Contact v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-contact2"
                                  className="sub-link"
                                >
                                  Contact v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/page-contact3"
                                  className="sub-link"
                                >
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
                                <a
                                  href="/dark/page-team-single"
                                  className="sub-link"
                                >
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
                                <a
                                  href="/dark/page-error-404"
                                  className="sub-link"
                                >
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
                              <span
                                className="fill-text"
                                data-text="Portfolio Type"
                              >
                                Portfolio Type
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/dark/portfolio-standard"
                                  className="sub-link"
                                >
                                  Standerd
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-gallery"
                                  className="sub-link"
                                >
                                  Gallery
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-metro"
                                  className="sub-link"
                                >
                                  Metro
                                </a>
                              </li>
                              <li>
                                <a href="/dark/masonry" className="sub-link">
                                  Masonry
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-caption-curso"
                                  className="sub-link"
                                >
                                  Caption Cursor
                                </a>
                              </li>
                              <li>
                                <a href="/dark/outline" className="sub-link">
                                  Outline
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-parallax"
                                  className="sub-link"
                                >
                                  Parallax
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/portfolio-sticky"
                                  className="sub-link"
                                >
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
                                <a
                                  href="/dark/showcase-fullscreen"
                                  className="sub-link"
                                >
                                  Parallax Slider
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-carousel"
                                  className="sub-link"
                                >
                                  Showcase Carousel
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-half-slider"
                                  className="sub-link"
                                >
                                  Creative Slider
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-interactive-full"
                                  className="sub-link"
                                >
                                  Interactive Full
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-interactive-center"
                                  className="sub-link"
                                >
                                  Interactive Center
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/dark/showcase-interactive-vertical"
                                  className="sub-link"
                                >
                                  Interactive Vertical
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li onClick={toggleSubMenu2}>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span
                                className="fill-text"
                                data-text="Portfolio Single"
                              >
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
  );
}

export default Navbar;
