import React from 'react';
import '../../styles/coaching/WorkshopList.css';
import moment from 'moment';
import WorkshopPreview from './WorkshopPreview';

const WorkshopList = props => {
  console.log(props.events[0]);
  return (
    <div className="workshop-list">
      <div className="header">Upcoming Workshops</div>
      <div className="events">
        {props.events.map((event, index) => (
          <WorkshopPreview key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default WorkshopList;
