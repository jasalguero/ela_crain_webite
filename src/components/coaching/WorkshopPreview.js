import React from 'react';
import moment from 'moment';
import '../../styles/coaching/WorkshopItem.css';
import { Link } from 'react-router-dom';

const WorkshopPreview = props => {
  console.log(props);
  const event = props.event;
  return (
    <div className="workshop-preview" key={event.id}>
      <Link to={`/coaching/events/${event.id}`}>
        <div
          className="image"
          style={{
            background: `url(${event.logo.url}) center center no-repeat`
          }}
        />
        <div className="info">
          <div className="date">
            {moment(event.start.utc).format('dddd, Do MMMM YYYY')} |{' '}
            {event.venue.address.city}
          </div>
          <div className="name">{event.name.text}</div>
        </div>
      </Link>
    </div>
  );
};

export default WorkshopPreview;
