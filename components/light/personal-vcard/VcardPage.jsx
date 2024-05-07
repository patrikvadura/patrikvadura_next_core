'use client';
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Skills from './Skills';
import Resume from './Resume';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function VcardPage() {
  function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll('[data-background]');

    if (backgroudImages.length > 0) {
      backgroudImages.forEach((element) => {
        let image = element.dataset.background;
        element.style.backgroundImage = `url('${image}')`;
      });
    }
  }
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      id="smooth-wrapper"
      className="bg-img vcard-bg"
      data-background="/light/assets/imgs/intro/vcard0.png"
    >
      <Navbar />
      <div id="smooth-content">
        <main>
          <section className="container">
            <div className="row justify-content-end">
              <div className="col-lg-6 bord-thin-top">
                <Intro />
                <Skills />
                <Resume />
                <Services />
                <Portfolio />
                <Testimonials />
                <Contact />
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default VcardPage;
