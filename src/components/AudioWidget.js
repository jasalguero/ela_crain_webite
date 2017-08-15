import React, { Component } from 'react';
import '../styles/ContactForm.css';

class AudioWidget extends Component {
  render() {
    return (
      <div className="audio-widget">
        <div className="audio-title">Listen to the Audio Story</div>
        <div className="audio-spacing">''</div>
        <div className="audio-spotify">Spotify thingy goes here</div>
      </div>
    );
  }
}

export default AudioWidget;
