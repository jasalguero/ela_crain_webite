import React, { Component } from 'react';
import '../styles/PostIndicator.css';

class PostIndicator extends Component {
  render() {
    return (
      <div className="post-indicator">
        <div className="number">{this.props.currentPostIndex + 1}</div>
        <div className="rectangle" />
        <div className="number">{this.props.totalPosts}</div>
      </div>
    );
  }
}

export default PostIndicator;
