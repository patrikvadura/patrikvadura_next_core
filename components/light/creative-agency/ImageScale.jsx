'use client';
import Script from 'next/script';
import React from 'react';

function ImageScale() {
  return (
    <section className="img-scale">
      <div className="image" data-overlay-dark="4">
        <div className="img">
          <img
            id="grow"
            src="/light/assets/imgs/background/2.jpg"
            data-speed="0.2"
            data-lag="0"
            alt=""
          />
        </div>
        <div className="text-u text-center ontop">
          <h2 className="fz-70 fw-600">
            Boost Your <span className="fw-300">Business</span> Up <br />
            <span className="fw-300">Ranking </span> High Lavel
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ImageScale;
