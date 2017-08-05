import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = ({ section }) => {
  return (
    <header
      className={section === 'writing' ? 'header-writting' : 'header-coaching'}
    >
      {section === 'writing'
        ? <div className="header-wrapper">
            <div className="icons left reading-styles">
              <span>Icon1</span>
              <span>Icon2</span>
            </div>
            <div className="logo">
              <Link to="/">Ela Crain</Link>
            </div>
            <div className="links">
              <Link to="/writing">Posts</Link>
              <Link to="/writing/about">About</Link>
            </div>
          </div>
        : <div>Coaching</div>}
    </header>
  );
};

export default Header;
