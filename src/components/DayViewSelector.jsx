import React from 'react';
import moment from 'moment';

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
      </div>
    );
  }
});

module.exports = DayViewSelector;
