import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/coaching/SinglePost.css';

class SinglePost extends Component {
  render() {
    const { post } = this.props;
    const image_url = post.fields && post.fields.image_url;
    const labels = post.fields && post.fields.labels;

    return (
      <div className="">
        <Link
          className="single-post coaching"
          to={`/coaching/posts/${post.id}`}
        >
          <div className="labels">{labels}</div>
          <div className="image-wrapper">
            <img src={image_url} alt={`${post.title}-top`} className="" />
          </div>
          <div className="title">{post.title}</div>
        </Link>
      </div>
    );
  }
}

export default SinglePost;
