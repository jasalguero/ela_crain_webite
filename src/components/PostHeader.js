import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import '../styles/coaching/PostHeader.css';

const SCROLL_MIN_DELTA = 300;

class PostHeader extends Component {
  state = {
    ticking: false,
    showHeader: false
  };

  calculateTotalHeight() {
    let body = document.body,
      html = document.documentElement;

    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    // console.log('calculating doc height ', height);
    return height;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolling);
  }

  handleScrolling = () => {
    // last_known_scroll_position = window.scrollY;
    if (!this.state.ticking) {
      window.requestAnimationFrame(() => {
        // doSomething(last_known_scroll_position)
        let docHeight = this.calculateTotalHeight();
        // console.log("scroll Y", window.scrollY, docHeight);
        this.setState({
          ticking: false,
          showHeader:
            (window.scrollY > SCROLL_MIN_DELTA) &
            (window.scrollY < docHeight - 1000)
        });
      });
    }
    this.setState({ ticking: true });
  };

  render() {
    const title = this.props.post ? this.props.post.title : '';
    const { type = 'writing' } = this.props;
    return (
      <div
        className={
          this.state.showHeader
            ? `post-header ${type}`
            : `post-header no-show ${type}`
        }
      >
        <ProgressBar show={this.state.showHeader} type={type} />
        <div className="left-side">
          <div className="currently-reading">CURRENTLY READING</div>
          <div
            className="post-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>
    );
  }
}

export default PostHeader;
