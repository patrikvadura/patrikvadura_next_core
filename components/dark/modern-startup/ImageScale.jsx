'use client';
import React, { useEffect, useRef } from 'react';

function ImageScale() {
  return (
    <div className="in-box mb-15">
      <div className="img-scale">
        <div className="image" data-overlay-dark="4">
          <div className="img">
            <img
              id="grow"
              src="/dark/assets/imgs/background/2.jpg"
              data-speed="0.2"
              data-lag="0"
              alt=""
            />
            <a
              href="https://youtu.be/AzwC6umvd1s"
              className="vid vid-circle d-flex align-items-center justify-content-center"
            >
              <span className="icon fz-50 ti-control-play"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageScale;
