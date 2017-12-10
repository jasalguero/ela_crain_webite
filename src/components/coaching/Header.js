import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeaderSelector from '../HeaderSelector';

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
            <Link to="/coaching">Coaching</Link>
            <Link to="/coaching/posts">Blog</Link>
            <Link to="/coaching/about">About</Link>
          </div>
          <div
            className="ec-header__logo-container"
            onClick={this.toggleSelector}
          >
            <span className="ec-header__logo">Ela Crain</span>
          </div>
          <div className="ec-header__icons-wrapper">
            {showLayoutIcons && (
              <LayoutButton
                onViewModeChange={onViewModeChange}
                viewMode={viewMode}
              />
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

const LayoutButton = props => {
  const { viewMode, onViewModeChange } = props;
  const changeViewMode = () => {
    viewMode === 'single'
      ? onViewModeChange('overview')
      : onViewModeChange('single');
  };
  return (
    <div className="ec-layout-button" onClick={changeViewMode}>
      {viewMode === 'single' ? (
        <div className="ec-layout-button__content">
          <div
            className={`ec-layout-button__icon ec-layout-button__icon--overview`}
          />
          <span>List View</span>
        </div>
      ) : (
        <div className="ec-layout-button__content">
          <div
            className={'ec-layout-button__icon ec-layout-button__icon--single'}
          />
          <span>Single View</span>
        </div>
      )}
    </div>
  );
};
