import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeaderSelector from '../HeaderSelector';
import '../../styles/coaching/Header.css';

class Header extends Component {
  state = {
    showSelector: false
  };

  toggleSelector = () => {
    this.setState({ showSelector: !this.state.showSelector });
  };

  render() {
    const { showLayoutIcons, onViewModeChange, viewMode } = this.props;

    return (
      <header
        className={`coaching ${this.state.showSelector ? 'open' : 'collapsed'}`}
      >
        <Helmet>
          <link
            rel="shortcut icon"
            href={require('../../icons/favicon_white.png')}
          />
        </Helmet>
        <HeaderSelector />
        <div className="header-wrapper">
          <div className="links">
            <Link to="/coaching">Coaching</Link>
            <Link to="/coaching/posts">Blog</Link>
            <Link to="/coaching/about">About</Link>
          </div>
          <div className="logo-container" onClick={this.toggleSelector}>
            <span className="logo">Ela Crain</span>
          </div>
          <div className="icons-wrapper">
            {showLayoutIcons && (
              <div className="icons left reading-styles">
                <span
                  className={`icon single ${viewMode === 'single'
                    ? 'selected'
                    : null}`}
                  onClick={() => onViewModeChange('single')}
                >
                  Single
                </span>
                <span
                  className={`icon overview ${viewMode === 'overview'
                    ? 'selected'
                    : null}`}
                  onClick={() => onViewModeChange('overview')}
                >
                  Overview
                </span>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
