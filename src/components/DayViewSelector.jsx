var React = require('react/react');
var moment = require('moment');

var DayView = require('./DayView');

var DayViewSelector = React.createClass({
  getDefaultProps: function() {
    return {
      selectedDay: moment().startOf('day')
    };
  },

  getInitialState: function() {
    return {
      selectedDay: moment(this.props.selectedDay)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.selectedDay !== undefined) {
      this.setState({
        selectedDay: moment(nextProps.selectedDay)
      });
    }
  },

  goToDay: function(days) {
    return function(e) {
      var nextDate = moment(this.state.selectedDay);
      this.setState({
        selectedDay: nextDate.add(days, 'days')
      });
      e.preventDefault();
    }.bind(this);
  },

  render: function() {
    var day = this.state.selectedDay;

    return (
      <div>
      Day: {day.format()}
      <a href="#" onClick={this.goToDay(-1)}>-</a>
      <a href="#" onClick={this.goToDay(+1)}>+</a>
      <DayView day={day}/>
      </div>
    );
  }
});

module.exports = DayViewSelector;
