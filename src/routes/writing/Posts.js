import React, { Component } from 'react';
import Header from '../../components/Header';
import '../../styles/Writing.css';

class WritingPosts extends Component {
  state = {
    viewMode: 'full'
  };

  changeViewMode = mode => {
    this.setState({ viewMode: mode });
  };

  render() {
    return (
      <div className="writing">
        <Header section="writing" onViewModeChange={this.changeViewMode} />
        <div className="content-wrapper">
          {this.state.viewMode === 'full'
            ? <h1>Full Mode</h1>
            : <h1>List Mode</h1>}
        </div>
      </div>
    );
  }
}

export default WritingPosts;
