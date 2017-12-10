import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
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
          {showLayoutIcons && (
            <LayoutButton
              onViewModeChange={onViewModeChange}
              viewMode={viewMode}
            />
          )}
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
