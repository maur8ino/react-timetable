import React from 'react';
import moment from 'moment';

var TimeSlot = React.createClass({
  getDefaultProps: function() {
    return {
      startTime: moment(),
      duration: moment.duration(30, 'minutes'),
      format: moment.defaultFormat
    };
  },

  render: function() {
    var from = this.props.startTime.format(),
        to = this.props.startTime.add(this.props.duration).format();

    return (
      <div className="time-slot" style={{'height': '40'}}>
        <div className="from">From: {from}</div>
        <div className="to">To: {to}</div>
      </div>
    );
  }
});

module.exports = TimeSlot;
