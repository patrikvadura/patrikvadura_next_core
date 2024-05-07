import generateStylesheetObject from '@/common/generateStylesheetsObject'
import Lines from '@/components/dark/common/Lines'
import ProgressScroll from '@/components/dark/common/ProgressScroll'
import Cursor from '@/components/dark/common/cusor'
import LoadingScreen from '@/components/dark/common/loader'
import Blog from '@/components/dark/creative-agency/Blog'
import Brands from '@/components/dark/creative-agency/Brands'
import Footer from '@/components/dark/creative-agency/Footer'
import Header from '@/components/dark/creative-agency/Header'
import ImageScale from '@/components/dark/creative-agency/ImageScale'
import Marquee from '@/components/dark/creative-agency/Marquee'
import Navbar from '@/components/dark/creative-agency/Navbar'
import Numbers from '@/components/dark/creative-agency/Numbers'
import Portfolio from '@/components/dark/creative-agency/Portfolio'
import Services from '@/components/dark/creative-agency/Services'
import Skills from '@/components/dark/creative-agency/Skills'
import Testimonials from '@/components/dark/creative-agency/Testimonials'
import Script from 'next/script'

export const metadata = {
  title: 'Infolio',
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

export default function CreativeAgency() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />

      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg pt-80 o-hidden">
            <Header />
            <Marquee />
            <Services />
            <Skills />
            <Numbers />
            <Portfolio />
            <Testimonials />
            <Brands />
            <ImageScale />
            <Blog />
          </main>
          <Footer />
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
    </body>
  )
}
