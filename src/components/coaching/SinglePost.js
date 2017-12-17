import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/coaching/SinglePost.css';
import ImageCollage from './ImageCollage';

class SinglePost extends Component {
  render() {
    const { post } = this.props;
    const image_url = post.fields && post.fields.image_url;
    const labels = post.fields && post.fields.labels;

    return (
      <div className="">
        <Link className="single-post-link" to={`/coaching/posts/${post.id}`}>
          {post.id && <ImageCollage post={post} />}
          <div className="single-post coaching">
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <div className="headline">
              {post.fields && post.fields.headline}
            </div>
            <div className="button">
              <Link className="" to={`/coaching/posts/${post.id}`}>
                Read
              </Link>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default SinglePost;
