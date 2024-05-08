import Header from '@/components/dark/about/Header'
import Script from 'next/script'
import Intro from '@/components/dark/about/Intro'
import Marquee from '@/components/dark/about/Marquee'
import Intro2 from '@/components/dark/about/Intro2'
import Testimonials from '@/components/dark/about/Testimonials'

export const metadata = {
  title: 'Zjistěte více o mně | Patrik Vaďura',
  description:
    'Jsem odborníkem v oblasti grafického designu a webového vývoje. Působím v samém srdci Moravy, v Uherském Hradišti, odkud vám nabízím široké portfolio služeb.',
}

export default function BlogList() {
  return (
    <>
      <div id="smooth-content">
        <main className="bg-primary">
          <Header />
          <Intro />
          <Marquee />
          <Intro2 />
          <Testimonials />
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
      <Script src="/dark/assets/js/smoother-script.js" strategy="lazyOnload" />/
      <Script src="/dark/assets/js/scripts.js"></Script>
    </>
  )
}
