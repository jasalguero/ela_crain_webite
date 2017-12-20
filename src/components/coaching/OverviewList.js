import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/coaching/OverviewPostList.css';

class PostList extends Component {
  render() {
    const posts = this.props.items;

    return (
      <div
        className={`overview-post-list-wrapper ${this.props.withFooter
          ? 'with-footer'
          : ''}`}
      >
        <ul className="overview-post-list coaching">
          {posts.map(post => (
            <li key={post.title} className="post">
              <Link to={`/coaching/posts/${post.id}`}>
                <div
                  className="title"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
                {/* <div className="info">Short Story, 2016</div> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
