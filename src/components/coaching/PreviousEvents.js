import React, { Component } from 'react';
import _ from 'lodash';

const PreviousEvents = props => {
  const { images } = props;
  console.log(images);

  const urls = _.map(images, image => _.get(image, 'fields.image'));
  console.log(urls);

  return (
    <div className="ec-previous-events">
      <div className="ec-previous-events__title">Previous Events</div>
      <div className="ec-previous-events__image-container">
        {images.length > 0 &&
          _.map(images, (image, index) => (
            <div
              className={`ec-previous-events__image-contain  ec-previous-events__image-contain--${index}`}
            >
              <img
                key={index}
                className={`ec-previous-events__image`}
                src={image.fields.image}
                alt="previous-event-image"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviousEvents;
