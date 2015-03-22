var React = require('react/react');
var moment = require('moment');

var TimeSlot = require('./TimeSlot');

var DayView = React.createClass({
  propTypes: {
    numberOfSlots: function(props) {
      if (props.numberOfSlots !== undefined && props.slotDuration !== undefined) {
        return new Error('You can specify only one of \'numberOfSlots\' or \'slotDuration\'');
      }
    },
    slotDuration: function(props) {
      if (props.numberOfSlots !== undefined && props.slotDuration !== undefined) {
        return new Error('You can specify only one of \'numberOfSlots\' or \'slotDuration\'');
      }
    }
  },

  getDefaultProps: function() {
    return {
      day: moment().startOf('day'),
      numberOfSlots: 48
    };
  },

  render: function() {
    var day = moment(this.props.day),
        numberOfSlots = this.props.numberOfSlots,
        slotDuration = moment.duration(moment.duration(1, 'day') / numberOfSlots),
        elements = [];

    for (var i = 0; i < numberOfSlots; i++) {
      var startTime = moment(day);
      startTime.add(i * slotDuration);
      elements.push(<TimeSlot key={i} startTime={startTime} duration={slotDuration}/>);
    }

    return (
      <div>
        {elements}
      </div>
    );
  }
});

module.exports = DayView;
