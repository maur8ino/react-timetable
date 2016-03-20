import test from 'ava';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import moment from 'moment';

import TimeSlot from '../../src/components/TimeSlot.jsx';

const renderer = createRenderer();
const now = moment();
const duration = moment.duration(15, 'minutes');
const from = 'From: '+ now.format(moment.defaultFormat);
const to = 'To: ' + moment(now).add(duration).format(moment.defaultFormat);
// Render a timeslot using shallow renderer
renderer.render(<TimeSlot startTime={now} duration={duration} />);
const timeslot = renderer.getRenderOutput();

test('<TimeSlot> should rendered in a div', (t) => {
  t.is(timeslot.type, 'div');
});

test('<TimeSlot> should have the right text in \'from\'', (t) => {
  t.is(timeslot.props.children[0].props.children.join(''), from);
});

test('<TimeSlot> should have the right text in \'to\'', (t) => {
  t.is(timeslot.props.children[1].props.children.join(''), to);
});
