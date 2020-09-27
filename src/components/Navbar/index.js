import React from 'react';
import './navbar.scss';

function index() {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="brand">Adarsh Kumar</span>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Languages</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#" className="btn">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default index;
