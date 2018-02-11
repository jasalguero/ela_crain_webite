import React from 'react';
import '../styles/PostIndicator.css';

const PostIndicator = props => {
  if (props.totalPosts > 0) {
    return (
      <div className={`post-indicator ${props.site}`}>
        <div
          className="arrow"
          style={{ transform: 'rotate(180deg)' }}
          onClick={e => props.handleNavi('prev', e)}
        >
          <div className="vertical-rectangle" />
          <div className="left-rectangle" />
          <div className="right-rectangle" />
          <div className="click-target" />
        </div>
        <div className="number">{props.currentPostIndex + 1}</div>
        <div className="rectangle" />
        <div className="number">{props.totalPosts}</div>
        <div className="arrow" onClick={e => props.handleNavi('next', e)}>
          <div className="click-target" />
          <div className="vertical-rectangle" />
          <div className="left-rectangle" />
          <div className="right-rectangle" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PostIndicator;
