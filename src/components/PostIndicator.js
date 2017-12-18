import React, { Component } from 'react';
import '../styles/PostIndicator.css';

class PostIndicator extends Component {
  render() {
    return (
      <div className={`post-indicator ${this.props.site}`}>
        <div className="number">
          {this.props.currentPostIndex > 0
            ? this.props.currentPostIndex + 1
            : 0}
        </div>
        <div className="rectangle" />
        <div className="number">{this.props.totalPosts}</div>
        <div className="arrow">
          <div className="vertical-rectangle" />
          <div className="left-rectangle" />
          <div className="right-rectangle" />
        </div>
      </div>
    );
  }
}

export default PostIndicator;
