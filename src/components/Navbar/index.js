import React, { Component } from 'react';

import './navbar.scss';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navlinksmob: false,
    };
  }

  handleToggleClick = () => {
    //console.log(this.state.navlinksmob);
    let val = true;
    if (this.state.navlinksmob) {
      val = false;
    }

    this.setState({
      navlinksmob: val,
    });
  };
  renderIcon = () => {
    if (this.state.navlinksmob) {
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="2.12134"
            width="25"
            height="3"
            rx="1.5"
            transform="rotate(45 2.12134 0)"
            fill="#6C6C6C"
          />
          <rect
            y="17.6777"
            width="25"
            height="3"
            rx="1.5"
            transform="rotate(-45 0 17.6777)"
            fill="#6C6C6C"
          />
        </svg>
      );
    } else {
      return (
        <svg
          width="25"
          height="17"
          viewBox="0 0 25 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="6.80756" width="25" height="3" rx="1.5" fill="#6C6C6C" />
          <path
            d="M0 3C0 1.34315 1.34315 0 3 0H22C23.6569 0 25 1.34315 25 3V3H0V3Z"
            fill="#6C6C6C"
          />
          <path
            d="M0 13.7453H25V13.7453C25 15.4021 23.6569 16.7453 22 16.7453H3C1.34315 16.7453 0 15.4021 0 13.7453V13.7453Z"
            fill="#6C6C6C"
          />
        </svg>
      );
    }
  };
  showMenu = () => {
    if (this.state.navlinksmob)
      return (
        <div className="nav-mobile">
          <div className="nav-res-links">
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
    else return null;
  };

  render() {
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
          <div className="burger-icon" onClick={this.handleToggleClick}>
            {this.renderIcon()}
          </div>
        </div>
        {this.showMenu()}
      </div>
    );
  }
}

export default index;
