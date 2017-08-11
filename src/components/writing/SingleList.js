import React, { Component } from 'react';
import SinglePost from './SinglePost';

class SingleList extends Component {
  state = {
    currentPostIndex: 0
  };

  render() {
    console.log('number of posts ', this.props.items.length);
    let item =
      this.props.items.length > this.state.currentPostIndex
        ? this.props.items[this.state.currentPostIndex]
        : {};

    return <SinglePost post={item} />;
  }
}

export default SingleList;
