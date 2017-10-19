import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/coaching/Header';
import '../../styles/coaching/SinglePost.css';

class SinglePost extends Component {
  render() {
    const { post } = this.props;
    const image_url = post.fields && post.fields.image_url;
    const labels = post.fields && post.fields.labels;

    return (
      <div className="single-post">
        <Header showLayoutIcons={true} onViewModeChange={this.changeViewMode} />
        <div className="labels">{labels}</div>
        <div className="image-collage">
          <div className="image-wrapper">
            <img
              src={image_url}
              alt={`${post.title}-top`}
              className=""
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className="title">{post.title}</div>
        <Link className="read-more-link" to={`/coaching/posts/${post.id}`}>
          Read More
        </Link>
      </div>
    );
  }
}

export default SinglePost;
