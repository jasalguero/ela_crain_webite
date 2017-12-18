import React from 'react';
import '../styles/PostIndicator.css';

const PostIndicator = props => {
  if (props.totalPosts > 0) {
    return (
      <div className={`post-indicator ${props.site}`}>
        <div className="number">{props.currentPostIndex + 1}</div>
        <div className="rectangle" />
        <div className="number">{props.totalPosts}</div>
        <div className="arrow">
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
