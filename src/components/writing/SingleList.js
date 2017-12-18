import React, { Component } from 'react';
import SinglePost from './SinglePost';
import PostIndicator from '../PostIndicator';
import '../../styles/SingleList.css';

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

  handleNavi = (dir, e) => {
    e.preventDefault();
    const up = dir === 'up';
    const down = dir === 'down';

    if (up || down) {
      let currentPostIndex = this.state.currentPostIndex;
      if (up && currentPostIndex === 0) return;
      if (down && currentPostIndex >= this.props.items.length - 1) return;
      this.setState({
        currentPostIndex: down ? ++currentPostIndex : --currentPostIndex
      });
    }
  };

  render() {
    const currentPostIndex = this.state.currentPostIndex;
    const totalPosts = this.props.items.length;
    let item =
      totalPosts > currentPostIndex ? this.props.items[currentPostIndex] : {};

    return (
      <div className="single-post-wrapper">
        <div className="placeholder" />
        <SinglePost post={item} />
        <PostIndicator
          currentPostIndex={currentPostIndex}
          totalPosts={totalPosts}
        />
        <div className="ec-single-post-list__nav">
          <div
            className="ec-single-post-list__nav-prev"
            onClick={e => this.handleNavi('up', e)}
            onTouchStart={e => this.handleNavi('up', e)}
          >
            ←
          </div>
          <div
            className="ec-single-post-list__nav-next"
            onClick={e => this.handleNavi('down', e)}
            onTouchStart={e => this.handleNavi('down', e)}
          >
            →
          </div>
        </div>
      </div>
    );
  }
}

export default SingleList;
