import React from 'react';
import '../../styles/coaching/Testimonials.css';

const WorkshopList = props => {
  return (
    <div className="testimonials">
      <div className="header">What people say</div>
      <div className="items">
        <div className="item">
          <div className="testimonial">
            “If you wear clothes that don't suit you, you're a fashion victim.
            You have to wear clothes that make you look better.”
          </div>
          <div className="author">
            Jose Salguero, Frontend Developer | Berlin
          </div>
        </div>
        <div className="item">
          <div className="testimonial">
            “If you wear clothes that don't suit you, you're a fashion victim.
            You have to wear clothes that make you look better.”
          </div>
          <div className="author">
            Jose Salguero, Frontend Developer | Berlin
          </div>
        </div>
        <div className="item">
          <div className="testimonial">
            “If you wear clothes that don't suit you, you're a fashion victim.
            You have to wear clothes that make you look better.”
          </div>
          <div className="author">
            Jose Salguero, Frontend Developer | Berlin
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopList;
