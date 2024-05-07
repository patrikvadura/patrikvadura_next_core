'use client';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Header from '@/components/light/home-main/Header';
import Intro from '@/components/light/home-main/Intro';
import Navbar from '@/components/light/home-main/Navbar';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function HomePage() {
  useEffect(() => {
    ScrollTrigger.normalizeScroll(false);

    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }, []);

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Intro />
          </main>
        </div>
      </div>
    </>
  );
}
