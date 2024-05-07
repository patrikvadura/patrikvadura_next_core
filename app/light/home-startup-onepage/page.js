import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Services from '@/components/light/modern-startup/Services';
import Header from '@/components/light/modern-startup/Header';
import Navbar from '@/components/light/modern-startup/Navbar';

import Script from 'next/script';
import About from '@/components/light/modern-startup/About';
import Marquee from '@/components/light/modern-startup/Marquee';
import Portfolio from '@/components/light/modern-startup/Portfolio';
import ImageScale from '@/components/light/modern-startup/ImageScale';
import Skills from '@/components/light/modern-startup/Skills';
import Testimonials from '@/components/light/modern-startup/Testimonials';
import Clients from '@/components/light/modern-startup/Clients';
import Blog from '@/components/light/modern-startup/Blog';
import Contact from '@/components/light/modern-startup/Contact';
import Footer from '@/components/light/modern-startup/Footer';

export const metadata = {
  title: 'Infolio',
  icons: {
    icon: '/light/assets/imgs/favicon.ico',
    shortcut: '/light/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/light/assets/css/plugins.css',
      '/light/assets/css/satoshi.css',
      '/light/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
    ]),
  },
};

export default function HomeModernStartup() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />

      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Services />
            <About />
            <Marquee />
            <Portfolio />
            <ImageScale />
            <Skills />
            <Testimonials />
            <Clients />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/light/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/light/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/light/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/light/assets/js/scripts.js"></Script>
    </body>
  );
}
