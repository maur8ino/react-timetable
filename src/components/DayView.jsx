import React from 'react';
import moment from 'moment';

import TimeSlot from './TimeSlot';

const DayView = ({
  day = moment().startOf('day'),
  slotDuration = moment.duration(15, 'minutes'),
  slotTimeFormat = moment.defaultFormat
}) => {
  let timeslots = Array.apply(null, {
    length: Math.ceil(moment.duration(1, 'day') / slotDuration)
  }).map((_, i) => {
    let startTime = day.clone().add(i * slotDuration);
    return <TimeSlot key={i} startTime={startTime} duration={slotDuration} format={slotTimeFormat}/>;
  });

  return timeslots && timeslots.length && (
    <div className="rtt-day-view">
      {timeslots}
    </div>
  );
};

export default DayView;
