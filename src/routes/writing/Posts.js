import React, { Component } from 'react';
import Header from '../../components/writing/Header';
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
        <Header
          showLayoutIcons={true}
          onViewModeChange={this.changeViewMode}
          viewMode={this.state.viewMode}
        />
        <div className="content-wrapper">
          {this.state.viewMode === 'single' ? (
            <SingleList items={this.props.posts} />
          ) : (
            <OverviewList items={this.props.posts} />
          )}
        </div>
      </div>
    );
  }
}

export default PostsRoute;
