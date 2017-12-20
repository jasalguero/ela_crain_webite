import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageCollage from '../ImageCollage';
import '../../styles/SinglePost.css';

class SinglePost extends Component {
  render() {
    const post = this.props.post;

    return (
      <div className="">
        <Link className="single-post-link" to={`/writing/posts/${post.id}`}>
          {post.id && <ImageCollage post={post} />}
          <div className="single-post">
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <div className="headline">
              {post.fields && post.fields.headline}
            </div>
            <div className="button">
              <Link className="" to={`/writing/posts/${post.id}`}>
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
