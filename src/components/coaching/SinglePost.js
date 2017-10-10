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
      <div
        className="single-post coaching"
        style={{
          background: `url("${image_url}") no-repeat center center fixed`,
          backgroundSize: 'cover'
        }}
      >
        <Header showLayoutIcons={true} onViewModeChange={this.changeViewMode} />
        <div className="labels">{labels}</div>
        <div className="title">{post.title}</div>
        <Link className="read-more-link" to={`/coaching/posts/${post.id}`}>
          Read More
        </Link>
      </div>
    );
  }
}

export default SinglePost;
