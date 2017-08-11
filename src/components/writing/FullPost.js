import React, { Component } from 'react';
import '../../styles/FullPost.css';

class FullPost extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="full-post">
        <img
          className="post-image"
          src="https://placeimg.com/640/480/people"
          alt={post.title}
        />
        <div className="title">
          {post.title}
        </div>
        <div className="excerpt">
          {post.excerpt}
        </div>
        <div className="comment">
          {post.comment}
        </div>
        {post.audio &&
          <div className="audio-widget">
            <div className="audio-title">Listen to the Audio Story</div>
            <div className="audio-spacing">''</div>
            <div className="audio-spotify">Spotify thingy goes here</div>
          </div>}
        <div className="head">
          {post.head}
        </div>
        <div className="content">
          {post.content}
        </div>
      </div>
    );
  }
}

export default FullPost;
