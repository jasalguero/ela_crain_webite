import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
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
    return (
      <div className="coaching">
        <Header showLayoutIcons={true} onViewModeChange={this.changeViewMode} />
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
