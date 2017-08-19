import React, { Component } from 'react';
import AudioWidget from '../AudioWidget';
import '../../styles/FullPost.css';

class FullPost extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="full-post">
        <div className="collage-wrapper">
          <div className="background-title">
            {post.title}
          </div>
          <img
            className="post-image"
            src="https://placeimg.com/640/480/people"
            alt={post.title}
          />
        </div>

        <div className="title">
          {post.title}
        </div>
        <div className="excerpt">
          {post.excerpt}
        </div>
        <div className="comment">
          {post.comment}
        </div>
        {post.audio && <AudioWidget data={post.audio} />}
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
