// @flow weak

import React, { PureComponent, PropTypes } from 'react';
import transition, { stop } from 'resonance/core/transition';
import { scaleOrdinal } from 'd3-scale';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import { APPEAR, UPDATE, REMOVE, REVIVE } from 'resonance/core/types';
import { COLORS, AGES } from '../module/constants';

const colors = scaleOrdinal()
  .range(COLORS).domain(AGES);

const styleSheet = createStyleSheet('Circle', (theme) => {
  return {
    circle: {
      fill: theme.palette.accent[500],
      opacity: 0.8,
      '&:hover': {
        opacity: 0.5,
      },
    },
    text: {
      fontSize: 12,
      textAnchor: 'middle',
      opacity: 1,
      fill: theme.palette.text.secondary,
    },
  };
});

export default class Circle extends PureComponent {
  static propTypes = {
    node: PropTypes.shape({
      udid: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
      r: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      children: PropTypes.array, // Leaf nodes have no children
    }).isRequired,
    activeAgeGroup: PropTypes.string,
    duration: PropTypes.number.isRequired,
    removeNode: PropTypes.func.isRequired,
  };

  static contextTypes = {
    theme: customPropTypes.muiRequired,
    styleManager: customPropTypes.muiRequired,
  };

  constructor(props) {
    super(props);

    (this:any).transition = transition.bind(this);
  }

  componentDidMount() {
    this.onAppear(this.props);
  }

  componentDidUpdate(prev) {
    const { props } = this;

    if (prev.node !== props.node) {
      switch (props.node.type) {
        case APPEAR:
          this.onAppear(props);
          break;
        case UPDATE:
          this.onUpdate(props);
          break;
        case REMOVE:
          this.onRemove(props);
          break;
        case REVIVE:
          this.onUpdate(props);
          break;
        default:
          break;
      }
    }
  }

  componentWillUnmount() {
    stop.call(this);
  }

  node = null;   // Root node ref set in render method
  circle = null; // Circle node ref set in render method

  onAppear({ duration, node: { r, x, y, depth, data: { name } } }) {
    const fill = depth === 2 ? colors(name.slice(5)) : 'rgba(255,255,255,0.5)';

    this.transition({
      node: {
        opacity: [1e-6, 0.8],
        transform: [`translate(${0},${0})`, `translate(${x},${y})`],
      },
      circle: { fill, r },
    }, { duration, delay: depth === 0 ? 0 : duration * 2 });
  }

  onUpdate({ duration, node: { r, x, y, depth, data: { name } } }) {
    const fill = depth === 2 ? colors(name.slice(5)) : 'rgba(255,255,255,0.5)';

    this.transition({
      node: {
        opacity: [0.8],
        transform: [`translate(${x},${y})`],
      },
      circle: { fill, r: [r] },
    }, { duration, delay: duration });
  }

  onRemove({ duration, node: { udid }, removeNode }) {
    this.transition({
      node: {
        opacity: [1e-6],
      },
      circle: { fill: 'rgba(0,0,0,0.3)' },
    }, { duration }, {
      end: () => {
        removeNode(udid);
      },
    });
  }

  render() {
    const { activeAgeGroup, node: { udid, depth, r } } = this.props;
    const classes = this.context.styleManager.render(styleSheet);
    const stroke = activeAgeGroup === udid.slice(5) ? 'tomato' : 'white';

    return (
      <g>
        <g ref={(d) => { this.node = d; }}>
          <title>{udid}</title>
          <circle stroke={stroke} ref={(d) => { this.circle = d; }} />
          <text className={classes.text} dy="0.3em">
            {(depth === 2 && r > 10) ? udid.slice(0, 2) : ''}
          </text>
        </g>
      </g>
    );
  }
}
