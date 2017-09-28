import React from 'react';
import WorkshopItem from './WorkshopItem';
import '../../styles/coaching/WorkshopList.css';

const WorkshopList = props => {
  const workshops = [];
  workshops.push(1);
  workshops.push(2);

  return (
    <div className="workshop-list">
      <div className="header">Upcoming Workshops</div>
      {workshops.map(workshop =>
        <WorkshopItem workshop={workshop} key={workshop} />
      )}
    </div>
  );
};

export default WorkshopList;
