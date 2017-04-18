// @flow weak

import { createSelector } from 'reselect';
import { arc } from 'd3-shape';
import { scaleLinear, scaleSqrt } from 'd3-scale';
import { hierarchy, partition } from 'd3-hierarchy';
import { EXAMPLE_STORE_KEY, RADIUS, PI } from './constants';
import webpackStats from '../../data/webpack-stats.json';

// ********************************************************************
//  ACTIONS
// ********************************************************************
const WEBPACK_SUNBURST_UPDATE_SCALES = 'WEBPACK_SUNBURST_UPDATE_SCALES';

// ********************************************************************
//  ACTION CREATORS
// ********************************************************************
export const updateScales = (node) => ({
  type: WEBPACK_SUNBURST_UPDATE_SCALES,
  node,
});

// ********************************************************************
//  SELECTORS
// ********************************************************************
const getData = (state) => state[EXAMPLE_STORE_KEY].data;

const getTree = createSelector(
  [getData],
  (data) => {
    const root = {
      name: 'resonance',
      children: [],
    };

    const addNode = (parent, node) => {
      let child;

      if (node.size) {
        child = { name: node.name, size: node.size };
      } else {
        child = { name: node.name, children: [] };
      }

      parent.children.push(child);

      node.childIDs.forEach((id) => {
        addNode(child, data.byID[id]);
      });
    };

    data.byID[0].childIDs.forEach((id) => {
      addNode(root, data.byID[id]);
    });

    const tree = hierarchy(root)
      .sum((d) => d.size || 0)
      .sort((a, b) => b.value - a.value);

    partition()(tree);

    tree.each((d) => {
      d.filePath = d.path(tree) // eslint-disable-line no-param-reassign
        .reverse()
        .map((n) => n.data.name).join('/');
    });

    return tree;
  },
);

const getXDomain = (state) => state[EXAMPLE_STORE_KEY].xDomain;
const getYRange = (state) => state[EXAMPLE_STORE_KEY].yRange;
const getYDomain = (state) => state[EXAMPLE_STORE_KEY].yDomain;

export const getScales = createSelector(
  [getXDomain, getYRange, getYDomain],
  (xDomain, yRange, yDomain) => {
    const xScale = scaleLinear().range([0, 2 * PI]).domain(xDomain);
    const yScale = scaleSqrt().range(yRange).domain(yDomain);

    // For convenience, just tuck a path generator in here for setting
    // state of arcs with noTransition set to true - see below.
    const path = arc()
      .startAngle((d) => Math.max(0, Math.min(2 * PI, xScale(d.x0))))
      .endAngle((d) => Math.max(0, Math.min(2 * PI, xScale(d.x1))))
      .innerRadius((d) => Math.max(0, yScale(d.y0)))
      .outerRadius((d) => Math.max(0, yScale(d.y1)));

    return {
      path,
      xScale,
      yScale,
    };
  },
);

export const getNodes = createSelector(
  [getScales, getTree],
  ({ xScale }, tree) => {
    tree.each((d) => {
      const a0 = (n) => Math.max(0, Math.min(2 * PI, xScale(n.x0)));
      const a1 = (n) => Math.max(0, Math.min(2 * PI, xScale(n.x1)));

      // Optimization - arcs are never removed on zoom and, when zoomed in, interpolators
      // are running on paths that are not visible (this is true in mbostocks original as well).
      // This can be a huge waste of CPU with lots of arcs so they get flagged here.
      // If the last angle was zero and the next is zero, flag it.
      // Note: you have to update the path because the y domain is changing, but there's
      // no need to animate it.  Just set the state to the final destination. When they reappear
      // They will have the correct y dimension (radius) for transitioning. See the Arc component.
      const angle = a1(d) - a0(d);
      const noTransition = d.angle === 0 && angle === 0; // Going from 0 to 0;

      d.angle = angle;               // eslint-disable-line no-param-reassign
      d.noTransition = noTransition; // eslint-disable-line no-param-reassign
    });

    return tree.descendants().map((node) => {
      const { x0, x1, y0, y1, angle, depth, filePath, noTransition } = node;

      return {
        x0,
        x1,
        y0,
        y1,
        angle,
        depth,
        filePath,
        noTransition,
      };
    });
  },
);

// ********************************************************************
//  REDUCER
// ********************************************************************
const initialState = {
  data: webpackStats,
  xDomain: [0, 1],
  yRange: [0, RADIUS],
  yDomain: [0, 1],
};

const scaleUpdate = ({ node: { x0, x1, y0 } }) => ({
  xDomain: [x0, x1],
  yRange: [y0 ? 20 : 0, RADIUS],
  yDomain: [y0, 1],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WEBPACK_SUNBURST_UPDATE_SCALES:
      return Object.assign({}, state, scaleUpdate(action));
    default:
      return state;
  }
}