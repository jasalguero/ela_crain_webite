import React, { Component } from 'react';

class ImageCollage extends Component {
  render() {
    const { post } = this.props;
    const title = post.title;
    const { image_url } = post.fields;

    return (
      <div className="collage-wrapper coaching">
        {/* <div className="background-title">{title}</div> */}
        <div className="image-collage">
          <div className="image-wrapper">
            <img src={image_url} alt={`${title}-img`} className="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCollage;
