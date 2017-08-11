import React, { Component } from 'react';
import '../../styles/OverviewPostList.css';

class PostList extends Component {
  render() {
    const items = this.props.items;

    return (
      <ul className="overview-post-list">
        {items.map(item =>
          <li key={item.title} className="post">
            <div className="title">
              {item.title}
            </div>
            <div className="info">Short Story, 2016</div>
          </li>
        )}
      </ul>
    );
  }
}

export default PostList;
