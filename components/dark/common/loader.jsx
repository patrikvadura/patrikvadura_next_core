'use client'
import React, { useEffect, useState, useRef } from 'react'
import classes from './loader.module.scss'

function LoadingScreen() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof gsap !== 'undefined') {
        clearInterval(interval);
        const svg = document.getElementById('svg');
        const tl = gsap.timeline();
        const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

        tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
          delay: 1.5,
          y: -100,
          opacity: 0,
        });
        tl.to(svg, {
          duration: 0.5,
          attr: { d: curve },
          ease: 'power2.easeIn',
        }).to(svg, {
          duration: 0.5,
          attr: { d: flat },
          ease: 'power2.easeOut',
        });
        tl.to('.loader-wrap', { y: -1500 });
        tl.to('.loader-wrap', { zIndex: -1, display: 'none' });
        tl.from('header', { y: 200 }, '-=1.5');
        tl.from(
            'header .container',
            { y: 40, opacity: 0, delay: 0.3 },
            '-=1.5'
        );
      }
    }, 100);
  }, []);

  const loadingAnimationPathRef = useRef(null);

  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    if (!animationEnded) {
      const loadingAnimationPath = loadingAnimationPathRef.current;
      if (loadingAnimationPath) {
        loadingAnimationPath.addEventListener('animationend', () => {
          setAnimationEnded(true);
          loadingAnimationPath.style.strokeDashoffset = 0;
          loadingAnimationPath.style.strokeDasharray = '0';
        });
      }
    }
  }, [animationEnded, loadingAnimationPathRef]);

  return (
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div className="loader-wrap-heading">
          <div className="load-text">
            <div className={classes.loader}>
              <svg viewBox="0 0 313 187">
                <path
                    ref={loadingAnimationPathRef}
                    className={classes.loadingAnimation__path}
                    d="M209 187H107L0 0h102l107 187Zm-53-94 54-93h102l-53 93H156Z"
                    fill={'#04080b'}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoadingScreen;
