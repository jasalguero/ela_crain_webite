import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeaderSelector from '../HeaderSelector';
import LayoutButton from '../header/LayoutButton';

class Header extends Component {
  state = {
    showSelector: false,
    scrollTop: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolling);
  }

  handleScrolling = e => {
    console.log(e);
    const scrollTop = document.documentElement.scrollTop;
    this.setState({ scrollTop });
  };

  toggleSelector = () => {
    this.setState({ showSelector: !this.state.showSelector });
  };

  render() {
    const { showLayoutIcons, onViewModeChange, viewMode } = this.props;
    const isHome =
      this.props.location.pathname.split('/').length > 2 ? false : true;

    return (
      <header
        className={`${this.state.showSelector
          ? 'ec-header--open'
          : 'ec-header'} ec-header--white`}
        style={{
          position: isHome ? 'fixed' : 'relative',
          background: this.state.scrollTop > 0 ? 'white' : 'transparent',
          zIndex: 1000000
        }}
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
