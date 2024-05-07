import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Services from '@/components/dark/modern-startup/Services';
import Header from '@/components/dark/modern-startup/Header';
import Navbar from '@/components/dark/modern-startup/Navbar';

import Script from 'next/script';
import About from '@/components/dark/modern-startup/About';
import Marquee from '@/components/dark/modern-startup/Marquee';
import Portfolio from '@/components/dark/modern-startup/Portfolio';
import ImageScale from '@/components/dark/modern-startup/ImageScale';
import Skills from '@/components/dark/modern-startup/Skills';
import Testimonials from '@/components/dark/modern-startup/Testimonials';
import Clients from '@/components/dark/modern-startup/Clients';
import Blog from '@/components/dark/modern-startup/Blog';
import Contact from '@/components/dark/modern-startup/Contact';
import Footer from '@/components/dark/modern-startup/Footer';

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
        src="/dark/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/dark/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/dark/assets/js/smoother-script.js" strategy="lazyOnload" />/ */}

      <Script src="/dark/assets/js/scripts.js"></Script>
    </body>
  );
}
