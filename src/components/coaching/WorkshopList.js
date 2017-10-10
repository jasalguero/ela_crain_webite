import React from 'react';
import '../../styles/coaching/WorkshopList.css';
import moment from 'moment';

const WorkshopList = props => {
  return (
    <div className="workshop-list">
      <div className="header">Upcoming Workshops</div>
      <div className="events">
        {props.events.map(event => (
          <div className="workshop-preview" key={event.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopList;
