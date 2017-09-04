import React, { Component } from 'react';
import ImageTop from '../images/bom-top.png'; // Tell Webpack this JS file uses this image
import ImageMiddle from '../images/bom-middle.png'; // Tell Webpack this JS file uses this image
import ImageBottom from '../images/bom-bottom.png'; // Tell Webpack this JS file uses this image
import '../styles/ImageCollage.css';

class AudioWidget extends Component {
  render() {
    let { title } = this.props;

    return (
      <div className="collage-wrapper">
        <div className="background-title">
          {title}
        </div>

        <div className="image-collage">
          <div className="image-wrapper">
            <img src={ImageTop} alt={`${title}-top`} className="image-top" />
            <img
              src={ImageMiddle}
              alt={`${title}-middle`}
              className="image-middle"
            />
            <img
              src={ImageBottom}
              alt={`${title}-bottom`}
              className="image-bottom"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AudioWidget;
