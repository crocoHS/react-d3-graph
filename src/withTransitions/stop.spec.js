// @flow weak
/* eslint-env mocha */
/* eslint react/no-multi-comp:0 */

import React, { Component } from 'react';
import { jsdom } from 'jsdom';
import { assert } from 'chai';
import { render } from 'react-dom';
import transition from './transition';
import stop from './stop';

const DURATION = 500;
const DELAY = 50;

class Path extends Component {
  componentDidMount() {
    transition.call(this, {
      path: {
        opacity: [1e-6, 0.8],
      },
      timing: {
        duration: DURATION,
        delay: DELAY,
      },
    });

    setTimeout(() => {
      stop.call(this);
    }, DELAY * 0.75);
  }

  path = null // ref set in render

  render() {
    return (
      <g>
        <path
          ref={(d) => { this.path = d; }}
          id="my-path"
          x={0} y={0}
        />
      </g>
    );
  }
}

class Line extends Component {
  componentDidMount() {
    transition.call(this, {
      line: {
        x1: [200],
        y1: [200],
      },
      timing: {
        duration: DURATION,
        delay: DELAY,
      },
    });

    setTimeout(() => {
      stop.call(this);
    }, DELAY + (DURATION / 2));
  }

  line = null // ref set in render

  render() {
    return (
      <g>
        <line
          ref={(d) => { this.line = d; }}
          id="my-line"
          x1={0} y1={0}
        />
      </g>
    );
  }
}

describe('stop', () => {
  it('should stop all scheduled transitions ', (done) => {
    const root = jsdom('');
    const body = root.body;
    const container = root.createElement('svg');
    body.appendChild(container);

    render(<Path />, container);
    const path = root.getElementById('my-path');

    setTimeout(() => {
      assert.strictEqual(+path.getAttribute('opacity'), 1e-6, 'should be equal');
      done();
    }, DELAY * 1.2);
  });

  it('should stop all transitions in progress ', (done) => {
    const root = jsdom('');
    const body = root.body;
    const container = root.createElement('svg');
    body.appendChild(container);

    render(<Line />, container);
    const line = root.getElementById('my-line');

    setTimeout(() => {
      assert.isAbove(+line.getAttribute('x1'), 0, 'should be equal');
      assert.isBelow(+line.getAttribute('x1'), 200, 'should be equal');
      assert.isAbove(+line.getAttribute('y1'), 0, 'should be equal');
      assert.isBelow(+line.getAttribute('y1'), 200, 'should be equal');
      done();
    }, DELAY + (DURATION * 2));
  });
});
