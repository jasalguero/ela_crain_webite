import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import HeaderSelector from '../HeaderSelector';
import LayoutButton from '../header/LayoutButton';

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
        className={`${this.state.showSelector
          ? 'ec-header--open'
          : 'ec-header'}`}
      >
        <Helmet>
          <link
            rel="shortcut icon"
            href={require('../../icons/favicon_black.png')}
          />
        </Helmet>

        <HeaderSelector />
        <div className="ec-header__wrapper">
          <div
            className="ec-layout-button__wrapper"
            style={{ visibility: showLayoutIcons ? 'visible' : 'hidden' }}
          >
            <LayoutButton
              showLayoutIcons={showLayoutIcons}
              onViewModeChange={onViewModeChange}
              viewMode={viewMode}
            />
          </div>
          <div
            className="ec-header__logo-container"
            onClick={this.toggleSelector}
          >
            <span className="ec-header__logo">Ela Crain</span>
          </div>
          <div className="ec-header__links">
            <Link to="/writing/posts">Writing</Link>
            <Link to="/writing/about">About</Link>
          </div>
        </div>
      </header>
    );
  }
}

const HeadderWithRouter = withRouter(Header);

export default HeadderWithRouter;
