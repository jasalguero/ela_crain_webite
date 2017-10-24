import React from 'react';
import '../../styles/coaching/Testimonials.css';

const WorkshopList = props => {
  return (
    <div className="testimonials">
      <div className="header">What people say</div>
      <div className="items">
        <div className="item">
          <div className="testimonial">
            “Ela is very good at facilitating and leading the group, while
            holding the space where everyone can speak openly.”
          </div>
          <div className="author">Johanna Eckart</div>
        </div>
        <div className="item">
          <div className="testimonial">
            “Ela is a great coach! She a created a safe and productive
            environment for us to talk about our problems.”
          </div>
          <div className="author">Karim Elbenower</div>
        </div>
        <div className="item">
          <div className="testimonial">
            “There are many ‘aha’ moments at Ela’s workshops. She can take
            something you resent and turn it into something you feel
            affectionate for. Once you see things that way, they stop having
            power over you.”
          </div>
          <div className="author">Jose Salguero</div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopList;
