import React, { Component } from 'react';
import SinglePost from './SinglePost';

class SingleList extends Component {
  state = {
    currentPostIndex: 0,
    scrollable: true
  };

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel = event => {
    const threshold = 1;
    const down = event.deltaY > threshold;
    const up = event.deltaY < -threshold;
    console.log(event.movementY, event.deltaY);

    if (this.state.scrollable) {
      if (up || down) {
        let currentPostIndex = this.state.currentPostIndex;
        if (up && currentPostIndex === 0) return;
        if (down && currentPostIndex >= this.props.items.length - 1) return;
        this.setState({
          currentPostIndex: down ? ++currentPostIndex : --currentPostIndex,
          scrollable: false
        });
        setTimeout(() => {
          this.setState({ scrollable: true });
        }, 1000);
      }
    }
  };

  render() {
    let item =
      this.props.items.length > this.state.currentPostIndex
        ? this.props.items[this.state.currentPostIndex]
        : {};

    return (
      <div className="single-post-wrapper">
        <SinglePost post={item} />
      </div>
    );
  }
}

export default SingleList;
