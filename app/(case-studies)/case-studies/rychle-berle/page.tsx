import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
import CaseStudiesHero from '@/app/components/CaseStudies/Hero'
import Portfolio from '@/app/components/Home/Portfolio'

export default function CreativePortfolio() {
  return (
    <>
      <div id="smooth-content">
        <main>
          <CaseStudiesHero />

          <Portfolio />
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

      <Script src="/dark/assets/js/scripts.js"></Script>
    </>
  )
}
