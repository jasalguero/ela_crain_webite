import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ section, onViewModeChange }) => {
  return (
    <header
      className={section === 'writing' ? 'header-writting' : 'header-coaching'}
    >
      {section === 'writing'
        ? <div className="header-wrapper">
            <div className="icons left reading-styles">
              <span
                className="icon single"
                onClick={() => onViewModeChange('single')}
              >
                Single
              </span>
              <span
                className="icon overview"
                onClick={() => onViewModeChange('overview')}
              >
                Overview
              </span>
            </div>
            <div className="logo">
              <Link to="/">Ela Crain</Link>
            </div>
            <div className="links">
              <Link to="/writing/posts">Posts</Link>
              <Link to="/writing/about">About</Link>
            </div>
          </div>
        : <div>Coaching</div>}
    </header>
  );
};

export default Header;
