var React = require('react/addons');
var moment = require('moment');
var TimeSlot = require('../../src/components/TimeSlot.jsx');
var TestUtils = React.addons.TestUtils;
var expect = require('chai').expect;

describe('TimeSlot', function() {
  it('should print from and to', function() {
    var now = moment(),
        duration = moment.duration(15, 'minutes'),
        from = 'From: '+ now.format(moment.defaultFormat),
        to = 'To: ' + moment(now).add(duration).format(moment.defaultFormat);

    // Render a timeslot in the document
    var timeslot = React.render(<TimeSlot startTime={now} duration={duration} />, document.body);

    // Verify that from has the right fromat
    var fromDiv = TestUtils.findRenderedDOMComponentWithClass(timeslot, 'from');
    expect(fromDiv.getDOMNode().textContent).to.equal(from);

    // Verify that to has the right fromat
    var toDiv = TestUtils.findRenderedDOMComponentWithClass(timeslot, 'to');
    expect(toDiv.getDOMNode().textContent).to.equal(to);

  });
});
