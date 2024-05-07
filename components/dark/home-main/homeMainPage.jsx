'use client';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Header from '@/components/dark/home-main/Header';
import Intro from '@/components/dark/home-main/Intro';
import Navbar from '@/components/dark/home-main/Navbar';

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
