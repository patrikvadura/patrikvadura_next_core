'use client';
import React, { useLayoutEffect } from 'react';
import data from '@/l-data/portfolios/worksfull.json';

function Interactive() {
  const handleMouseLeave = () => {
    const image = document.querySelector('.item-im');
    image.classList.add('out-ani');
    // // document.querySelector('.item-im').style.transform = 'translateX(100%)';
    setTimeout(() => {
      //   image.style.transform = 'translateX(-100%)';
      image.classList.remove('out-ani');
    }, 500); // Adjust this value to change the delay
  };

  return (
    <section className="interactive-center">
      <div className="container text-center">
        {data.map((item, i) => (
          <div
            key={i}
            onMouseLeave={handleMouseLeave}
            className="item-d item block"
            data-fx="1"
          >
            <a href={item.link} className="block__link">
              <div className="hover-i">
                <img className="item-im" src={item.img} alt="" />
              </div>
              <div className="cont">
                <h4 className="f-bold">{item.title}</h4>
                <p>{item.subTitle}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interactive;
