import React from 'react';
import moment from 'moment';
import '../../styles/coaching/WorkshopItem.css';

const WorkshopList = props => {
  const event = props.event;
  console.log('description', event.description.html);
  return (
    <div className="workshop-item">
      <div
        className="image"
        style={{ background: `url(${event.logo.url}) center center no-repeat` }}
      />
      <div className="info">
        <div className="date">
          {moment(event.start.utc).format('dddd, Do MMMM YYYY')} |{' '}
          {event.venue.address.city}
        </div>
        <div className="name">
          {event.name.text}
        </div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: event.description.html }}
        />
        {/* <div className="description">
          {event.description.text}
        </div> */}
        <a href={event.url} target="_blank">
          <button className="eventbrite-button">Book on Eventbrite</button>
        </a>
        <div className="seats">
          Only {event.capacity} Seats Available
        </div>
      </div>
    </div>
  );
};

export default WorkshopList;
