import React from 'react';
import '../../styles/writing/Reviews.css';
import _ from 'lodash';

const WorkshopList = props => {
  console.log(props);
  return (
    <div className="reviews">
      <h1>Reviews</h1>

      {_.map(props.reviews, (review, index) => {
        return (
          <div key={index} className="review">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: review.fields.content }}
            />
            <span className="author">—{review.fields.author}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WorkshopList;
