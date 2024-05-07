import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Blog from '@/components/dark/home-main/Blog';
import Clients from '@/components/dark/home-main/Clients';
import Footer from '@/components/dark/home-main/Footer';
import Header from '@/components/dark/home-main/Header';
import Intro from '@/components/dark/home-main/Intro';
import Marquee from '@/components/dark/home-main/Marquee';
import Navbar from '@/components/dark/home-main/Navbar';
import Portfolio from '@/components/dark/home-main/Portfolio';
import Services from '@/components/dark/home-main/Services';
import Services2 from '@/components/dark/home-main/Services2';
import Team from '@/components/dark/home-main/Team';
import Testimonials from '@/components/dark/home-main/Testimonials';
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

export default function Home() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <main className="main-bg o-hidden">
            <Header />
            <Intro />
            <Services />
            <Services2 />
            <Marquee />
            <Portfolio />
            <Testimonials />
            <Team />
            <Blog />
            <Clients />
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
