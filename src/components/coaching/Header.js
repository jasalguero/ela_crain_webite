import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
          : 'ec-header'} ec-header--white`}
      >
        <Helmet>
          <link
            rel="shortcut icon"
            href={require('../../icons/favicon_white.png')}
          />
        </Helmet>
        <HeaderSelector />
        <div className="ec-header__wrapper">
          <div className="ec-header__links">
            <Link
              className={
                this.props.location.pathname.split('/')[2] === undefined
                  ? 'active'
                  : ''
              }
              to="/coaching"
            >
              Coaching
            </Link>
            <Link
              className={
                this.props.location.pathname.split('/')[2] === 'posts'
                  ? 'active'
                  : ''
              }
              to="/coaching/posts"
            >
              Blog
            </Link>
            <Link
              className={
                this.props.location.pathname.split('/')[2] === 'about'
                  ? 'active'
                  : ''
              }
              to="/coaching/about"
            >
              About
            </Link>
          </div>
          <div
            className="ec-header__logo-container"
            onClick={this.toggleSelector}
          >
            <span className="ec-header__logo">Ela Crain</span>
          </div>
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
        </div>
      </header>
    );
  }
}

const HeadderWithRouter = withRouter(Header);

export default HeadderWithRouter;
