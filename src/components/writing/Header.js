import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderSelector from '../HeaderSelector';
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
        <HeaderSelector showSelector={this.state.showSelector} />
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
          <div className="logo-container" onClick={this.toggleSelector}>
            <span className="logo">Ela Crain</span>
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
