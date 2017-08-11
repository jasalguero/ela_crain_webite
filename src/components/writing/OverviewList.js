import React, { Component } from 'react';

class PostList extends Component {
  render() {
    const items = this.props.items;

    return (
      <ul className="overview-post-list">
        {items.map(item =>
          <h1 key={item.title}>
            {item.title}
          </h1>
        )}
      </ul>
    );
  }
}

export default PostList;
