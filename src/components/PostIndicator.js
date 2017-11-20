import React, { Component } from 'react';
import '../styles/PostIndicator.css';

class PostIndicator extends Component {
  render() {
    return (
      <div className="post-indicator">
        <div className="number writing">{this.props.currentPostIndex + 1}</div>
        <div className="rectangle writing" />
        <div className="number writing">{this.props.totalPosts}</div>
      </div>
    );
  }
}

export default PostIndicator;
