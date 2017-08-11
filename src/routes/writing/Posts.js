import React, { Component } from 'react';
import Header from '../../components/Header';
import OverviewList from '../../components/writing/OverviewList';
import SingleList from '../../components/writing/SingleList';
import '../../styles/Writing.css';
import * as WritingAPI from '../../utils/WritingAPI';

class WritingPosts extends Component {
  state = {
    viewMode: 'single',
    posts: []
  };

  componentDidMount() {
    WritingAPI.getAllPosts().then(posts => {
      this.setState({ posts });
    });
  }

  changeViewMode = mode => {
    this.setState({ viewMode: mode });
  };

  render() {
    return (
      <div className="writing">
        <Header section="writing" onViewModeChange={this.changeViewMode} />
        <div className="content-wrapper">
          {this.state.viewMode === 'single'
            ? <SingleList items={this.state.posts} />
            : <OverviewList items={this.state.posts} />}
        </div>
      </div>
    );
  }
}

export default WritingPosts;
