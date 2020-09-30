import React from 'react';
import './Hero.scss';

const index = () => {
  return (
    <div className="hero-section">
      <svg id="background-svg" viewBox="0 0 1366 301" fill="none">
        <path d="M1366 37.5L0 301V0H1366V37.5Z" fill="#F6F9FC" />
      </svg>
      <div className="hero">
        <div className="hero-text">
          <p className="emphasis-2 first">Hi. I am</p>
          <p className="emphasis-1 second">ADARSH KUMAR</p>
          <p className="emphasis-2 third">Programmer</p>
        </div>
        <div className="hero-img"></div>
      </div>
    </div>
  );
};

export default index;
