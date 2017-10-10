import React, { Component } from 'react';
import '../../styles/coaching/ImageCollage.css';

class ImageCollage extends Component {
  render() {
    const { post } = this.props;
    const title = post.title;
    const { image_url } = post.fields;

    return (
      <div className="collage-wrapper">
        <div className="background-title">{title}</div>

        <div className="image-collage">
          <img
            src={image_url}
            alt={`${title}-img`}
            className="image-background"
          />
        </div>
      </div>
    );
  }
}

export default ImageCollage;
