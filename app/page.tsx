import type { Metadata } from 'next'
import Script from 'next/script'
import About from '@/components/dark/creative-portfolio/About'
import Blog from '@/components/dark/creative-portfolio/Blog'
import Header from '@/app/components/Home/Hero'
import Marquee from '@/components/dark/creative-portfolio/Marquee'
import Portfolio from '@/app/components/Home/Portfolio'
import Services from '@/components/dark/creative-portfolio/Services'
import Team from '@/components/dark/creative-portfolio/Team'
import Testimonials from '@/components/dark/creative-portfolio/Testimonials'

export const metadata: Metadata = {
  title: 'Kreativec a webový vývojář | Patrik Vaďura',
  description:
    'Jsem odborníkem v oblasti grafického designu a webového vývoje. Působím v samém srdci Moravy, v Uherském Hradišti, odkud vám nabízím široké portfolio služeb.',
}

export default function CreativePortfolio() {
  return (
    <>
      <div id="smooth-content">
        <main className="main-bg">
          <div className="sub-bg o-hidden">
            <Header />
            <Portfolio />
          </div>
          <div id="wrapper" />
          <Services />
          <About />
          <Testimonials />
          <Team />
          <Marquee />
          <Blog />
        </main>
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
    </>
  )
}
