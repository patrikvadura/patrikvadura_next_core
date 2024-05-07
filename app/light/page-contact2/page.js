import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Footer from '@/components/light/blog-details/Footer';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Contact from '@/components/light/contact2/Contact';
import Map from '@/components/light/contact2/Map';
import Navbar from '@/components/light/creative-agency/Navbar';
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

export default function Contact2Page() {
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
            <Map />
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
