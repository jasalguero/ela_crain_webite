import React, { Component } from 'react';

import '../../styles/coaching/Testimonials.css';
import _ from 'lodash';

class WorkshopList extends Component {
  state = {
    showAll: false
  };

  render() {
    return (
      <div className="testimonials">
        <div className="header">Testimonials</div>
        <div className="items">
          {_.map(this.props.reviews, (review, index) => {
            if (index > 2 && !this.state.showAll) return;

            return (
              <div key={index} className="item">
                {review.fields.authorPicture && (
                  <img
                    src={review.fields.authorPicture}
                    alt=""
                    className="author-picture"
                  />
                )}
                <div
                  className="testimonial"
                  dangerouslySetInnerHTML={{ __html: review.fields.content }}
                />
                <div
                  className="author"
                  dangerouslySetInnerHTML={{ __html: review.fields.author }}
                />
              </div>
            );
          })}
        </div>
        <div className="button">
          <button
            onClick={() => this.setState({ showAll: !this.state.showAll })}
          >
            {this.state.showAll ? '- View Less' : '+ View More'}
          </button>
        </div>
      </div>
    );
  }
}

export default WorkshopList;
