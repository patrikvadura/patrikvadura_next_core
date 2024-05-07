import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar';
import About from '@/components/dark/modern-agency/About';
import Blog from '@/components/dark/modern-agency/Blog';
import Brands from '@/components/dark/modern-agency/Brands';
import Footer from '@/components/dark/modern-agency/Footer';
import Header from '@/components/dark/modern-agency/Header';
import Marquee from '@/components/dark/modern-agency/Marquee';
import Number from '@/components/dark/modern-agency/Number';
import Portfolio from '@/components/dark/modern-agency/Portfolio';
import Services from '@/components/dark/modern-agency/Services';
import ServicesTab from '@/components/dark/modern-agency/ServicesTab';
import Team from '@/components/dark/modern-agency/Team';
import Testimonials from '@/components/dark/modern-agency/Testimonials';
import Script from 'next/script';
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
