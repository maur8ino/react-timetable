import React from 'react';
import moment from 'moment';

const TimeSlot = ({
  startTime = moment(),
  duration = moment.duration(15, 'minutes'),
  format = moment.defaultFormat
}) => {
  let from = startTime.format();
  let to = startTime.clone().add(duration).format();

  return (
    <div className="rtt-time-slot" style={{'height': '40'}}>
      <div className="rtt-time-slot-from">From: {from}</div>
      <div className="rtt-time-slot-to">To: {to}</div>
    </div>
  );
};

export default TimeSlot;
