import React from 'react/addons';
import { expect } from 'chai';
import moment from 'moment';

import TimeSlot from '../../src/components/TimeSlot.jsx';

let { TestUtils } = React.addons;

describe('TimeSlot', () => {
  let shallowRenderer = TestUtils.createRenderer();

  describe('rendered with \'from\' and \'to\'', () => {
    let now = moment();
    let duration = moment.duration(15, 'minutes');
    let from = 'From: '+ now.format(moment.defaultFormat);
    let to = 'To: ' + moment(now).add(duration).format(moment.defaultFormat);

    // Render a timeslot using shallowRenderer
    shallowRenderer.render(<TimeSlot startTime={now} duration={duration} />);
    let timeslot = shallowRenderer.getRenderOutput();

    it('should rendered in a div', () => {
      expect(timeslot.type).to.equal('div');
    });

    it('should have the right text in \'from\'', () => {
      expect(timeslot.props.children[0].props.children.join('')).to.equal(from);
    });

    it('should have the right text in \'to\'', () => {
      expect(timeslot.props.children[1].props.children.join('')).to.equal(to);
    });
  });
});
