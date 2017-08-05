import React, { Component } from 'react';
import Header from '../components/Header';
import '../styles/writing.css';

class Writing extends Component {
  render() {
    return (
      <div className="writing">
        <Header section="writing" />
        <h1>Writing</h1>
      </div>
    );
  }
}

export default Writing;
