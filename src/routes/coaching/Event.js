import React from 'react';
import Header from '../../components/coaching/Header';
import WorkshopItemFull from '../../components/coaching/WorkshopItemFull';
import '../../styles/Coaching.css';
import _ from 'lodash';

const EventRoute = props => {
  const event = _.find(props.events, ['id', props.match.params.id]);
  return (
    <div>
      <Header showLayoutIcons={false} />
      {event ? <WorkshopItemFull event={event} /> : null}
    </div>
  );
};

export default EventRoute;
