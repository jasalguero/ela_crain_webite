import React from 'react';
import '../../styles/coaching/Testimonials.css';
import _ from 'lodash';

const WorkshopList = props => {
  return (
    <div className="testimonials">
      <div className="header">What people say</div>
      <div className="items">
        {_.map(props.reviews, (review, index) => {
          return (
            <div key={index} className="item">
              <div className="testimonial">{review.fields.content}</div>
              <div className="author"> {review.fields.author} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkshopList;
