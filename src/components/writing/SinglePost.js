import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SinglePost.css';

class SinglePost extends Component {
  render() {
    const post = this.props.post;

    return (
      <div className="single-post">
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
        <Link className="read-more-link" to={`/writing/posts/${post.id}`}>
          Read More
        </Link>
      </div>
    );
  }
}

export default SinglePost;
