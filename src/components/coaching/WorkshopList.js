import React from 'react';
import WorkshopItem from './WorkshopItem';
import '../../styles/coaching/WorkshopList.css';

const WorkshopList = props => {
  return (
    <div className="workshop-list">
      <div className="header">Upcoming Workshops</div>
      {props.events.map(event => <WorkshopItem event={event} key={event.id} />)}
    </div>
  );
};

export default WorkshopList;
