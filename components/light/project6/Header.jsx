'use client';
import React, { useLayoutEffect } from 'react';

function Header() {
  return (
    <div className=" header header-project6 section-padding">
      <div className="container-xl">
        <div className="info d-flex align-items-center mb-10">
          <div>
            <span className="category">Apps</span>
            <span className="category">Design</span>
          </div>
          <div className="date">August 7, 2023</div>
        </div>
        <h1 className="fz-80">TH3 Web Design</h1>
      </div>
    </div>
  );
}

export default Header;
