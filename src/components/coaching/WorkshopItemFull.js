import React from 'react';
import moment from 'moment';
import '../../styles/coaching/WorkshopItem.css';
import { Link } from 'react-router-dom';

const WorkshopList = props => {
  const event = props.event;
  return (
    <div className="workshop-item">
      <Link to={`/coaching`}>
        <span>Back</span>
      </Link>
      <div
        className="image"
        style={{
          background: `url(${event.logo &&
            event.logo.url}) center center no-repeat`
        }}
      />
      <div className="info">
        <div className="date">
          {moment(event.start.utc).format('dddd, Do MMMM YYYY')} |{' '}
          {event.venue.address.city}
        </div>
        <div className="name">{event.name.text}</div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: event.description.html }}
        />
        <a href={event.url} target="_blank">
          <button className="eventbrite-button">Book on Eventbrite</button>
        </a>
        <div className="seats">Only {event.capacity} Seats Available</div>
      </div>
    </div>
  );
};

export default WorkshopList;
