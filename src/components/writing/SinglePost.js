import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageCollage from '../ImageCollage';
import '../../styles/SinglePost.css';

class SinglePost extends Component {
  render() {
    const post = this.props.post;

    return (
      <div className="">
        <Link className="single-post" to={`/writing/posts/${post.id}`}>
          {post.id && <ImageCollage post={post} />}
          <div className="title">{post.title}</div>
          <div className="headline">{post.fields && post.fields.headline}</div>
        </Link>
      </div>
    );
  }
}

export default SinglePost;
