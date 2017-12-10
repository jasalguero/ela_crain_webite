import React from 'react';

const LayoutButton = props => {
  const { viewMode, onViewModeChange, showLayoutIcons } = props;
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

export default LayoutButton;
