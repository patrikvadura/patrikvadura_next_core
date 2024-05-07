import type { Metadata } from 'next'
import Script from 'next/script'
import generateStylesheetObject from '@/common/generateStylesheetsObject'
import Lines from '@/components/dark/common/Lines'
import ProgressScroll from '@/components/dark/common/ProgressScroll'
import Cursor from '@/components/dark/common/cusor'
import LoadingScreen from '@/components/dark/common/loader'
import About from '@/components/dark/creative-portfolio/About'
import Blog from '@/components/dark/creative-portfolio/Blog'
import Footer from '@/app/ui/Footer'
import Header from '@/components/dark/creative-portfolio/Header'
import Marquee from '@/components/dark/creative-portfolio/Marquee'
import Navbar from '@/components/dark/creative-portfolio/Navbar'
import Portfolio from '@/components/dark/creative-portfolio/Portfolio'
import Services from '@/components/dark/creative-portfolio/Services'
import Team from '@/components/dark/creative-portfolio/Team'
import Testimonials from '@/components/dark/creative-portfolio/Testimonials'

export const metadata: Metadata = {
  title: 'Kreativec a webový vývojář | Patrik Vaďura',
  description:
    'Jsem odborníkem v oblasti grafického designu a webového vývoje. Působím v samém srdci Moravy, v Uherském Hradišti, odkud vám nabízím široké portfolio služeb.',
  icons: {
    icon: '/dark/assets/imgs/favicon.ico',
    shortcut: '/dark/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/dark/assets/css/plugins.css',
      '/dark/assets/css/satoshi.css',
      '/dark/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
    ]),
  },
}

export default function CreativePortfolio() {
  return (
    <div className="crev-portfolio">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />

      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg pt-15">
            <div className="sub-bg radius-30 o-hidden">
              <Header />
              <Portfolio />
            </div>
            <Services />
            <About />
            <Testimonials />
            <Team />
            <Marquee />
            <Blog />
            <Footer />
          </main>
        </div>
      </div>

      <Script src="/dark/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script strategy="beforeInteractive" src="/dark/assets/js/plugins.js"></Script>
      <Script strategy="beforeInteractive" src="/dark/assets/js/TweenMax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/dark/assets/js/charming.min.js"></Script>
      <Script strategy="beforeInteractive" src="/dark/assets/js/countdown.js"></Script>

      <Script strategy="beforeInteractive" src="/dark/assets/js/gsap.min.js"></Script>
      <Script strategy="beforeInteractive" src="/dark/assets/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/dark/assets/js/isotope.pkgd.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/dark/assets/js/smoother-script.js" strategy="lazyOnload" />/ */}

      <Script src="/dark/assets/js/scripts.js"></Script>
    </div>
  )
}
