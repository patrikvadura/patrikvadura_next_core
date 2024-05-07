import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/creative-agency/Navbar';
import About from '@/components/light/modern-agency/About';
import Blog from '@/components/light/modern-agency/Blog';
import Brands from '@/components/light/modern-agency/Brands';
import Footer from '@/components/light/modern-agency/Footer';
import Header from '@/components/light/modern-agency/Header';
import Marquee from '@/components/light/modern-agency/Marquee';
import Number from '@/components/light/modern-agency/Number';
import Portfolio from '@/components/light/modern-agency/Portfolio';
import Services from '@/components/light/modern-agency/Services';
import ServicesTab from '@/components/light/modern-agency/ServicesTab';
import Team from '@/components/light/modern-agency/Team';
import Testimonials from '@/components/light/modern-agency/Testimonials';
import Script from 'next/script';
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
          <main className="main-bg">
            <Header />
            <Services />
            <About />
            <Number />
            <Portfolio />
            <Marquee />
            <Brands />
            <ServicesTab />
            <Testimonials />
            <Team />
            <Blog />
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
