import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/writing/Header.css';

class Header extends Component {
  state = {
    showSelector: false
  };

  toggleSelector = () => {
    this.setState({ showSelector: !this.state.showSelector });
  };

  render() {
    const { showLayoutIcons, onViewModeChange } = this.props;

    return (
      <header>
        <div
          className={`section-selector ${this.state.showSelector
            ? 'open'
            : 'collapsed'}`}
        >
          <div className="writing-section section">
            <Link to="/writing/posts">Writing</Link>
          </div>
          <div className="coaching-section section">
            <Link to="/coaching">Coaching</Link>
          </div>
        </div>
        <div className="header-wrapper">
          <div className="icons-wrapper">
            {showLayoutIcons &&
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
              </div>}
          </div>
          <div className="logo" onClick={this.toggleSelector}>
            <span>Ela Crain</span>
          </div>
          <div className="links">
            <Link to="/writing/posts">Posts</Link>
            <Link to="/writing/about">About</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
