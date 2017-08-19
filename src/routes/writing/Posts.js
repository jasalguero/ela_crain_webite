import React, { Component } from 'react';
import Header from '../../components/Header';
import OverviewList from '../../components/writing/OverviewList';
import SingleList from '../../components/writing/SingleList';
import '../../styles/Writing.css';

class PostsRoute extends Component {
  state = {
    viewMode: 'single'
  };

  changeViewMode = mode => {
    this.setState({ viewMode: mode });
  };

  render() {
    return (
      <div className="writing">
        <Header section="writing" onViewModeChange={this.changeViewMode} />
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
