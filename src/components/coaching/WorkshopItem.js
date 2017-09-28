import React from 'react';
import '../../styles/coaching/WorkshopItem.css';

const WorkshopList = props => {
  return (
    <div className="workshop-item">
      <div className="image">img</div>
      <div className="info">
        <div className="date">Monday, 25 October 2017 | Berlin</div>
        <div className="name">How to stop being a perfectionist</div>
        <div className="description">
          A four hours workshop session to understand how perfectionism is
          holding you back from delivering the best work you can.
        </div>
        <button className="eventbrite-button">Book on Eventbrite</button>
        <div className="seats">Only 4 Seats Available</div>
      </div>
    </div>
  );
};

export default WorkshopList;
