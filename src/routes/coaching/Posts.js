import React, { Component } from 'react';
import OverviewList from '../../components/coaching/OverviewList';
import SingleList from '../../components/coaching/SingleList';
import '../../styles/Coaching.css';

class PostsRoute extends Component {
  state = {
    viewMode: 'single'
  };

  changeViewMode = mode => {
    this.setState({ viewMode: mode });
  };

  render() {
    debugger;
    return (
      <div className="coaching">
        <div className="content-wrapper">
          {this.state.viewMode === 'single'
            ? <SingleList items={this.props.posts} />
            : <OverviewList items={this.props.posts} />}
        </div>
      </div>
    );
  }
}

export default PostsRoute;
