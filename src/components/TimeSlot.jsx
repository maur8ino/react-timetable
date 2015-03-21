var React = require('react/react');
var moment = require('moment');

var TimeSlot = React.createClass({
  getDefaultProps: function() {
    return {
      startTime: moment(),
      duration: moment.duration(30, 'minutes')
    };
  },

  render: function() {
    var from = this.props.startTime.format(),
        to = this.props.startTime.add(this.props.duration).format();

    return (
      <div style={{'height': '40'}}>
        <div>From: {from}</div>
        <div>To: {to}</div>
      </div>
    );
  }
});

module.exports = TimeSlot;
