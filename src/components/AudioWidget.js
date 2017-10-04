import React, { Component } from 'react';
import '../styles/AudioWidget.css';

class AudioWidget extends Component {
  render() {
    const URL = `https://w.soundcloud.com/player/?url=${this.props
      .data}&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`;
    return (
      <div className="audio-widget">
        <div className="audio-title">Listen to the Audio Story</div>
        <div className="audio-spacing">''</div>
        <div className="audio-spotify">
          <iframe
            title="soundcloud"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            src={URL}
          />
        </div>
      </div>
    );
  }
}

export default AudioWidget;
