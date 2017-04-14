// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { arc } from 'd3-shape';
import { scaleLinear, scaleSqrt } from 'd3-scale';
import { connect } from 'react-redux';
import { Table, TableRow, TableRowColumn, TableBody } from 'material-ui/Table';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';
import Surface from 'resonance/Surface';
// import NodeGroup from 'resonance/NodeGroup';
import MarkdownElement from 'docs/src/components/MarkdownElement';
import { updateSortOrder, updateTopCount, makeGetSelectedData } from '../module';
import { VIEW, TRBL, AGES, COLORS } from '../module/constants';
// import Circle from './Circle';
import description from '../description.md';

const dims = [
  VIEW[0] - TRBL[1] - TRBL[3],  // Usable dimensions width
  VIEW[1] - TRBL[0] - TRBL[2],  // Usable dimensions height
];

const radius = Math.min(...dims) / 2;

const x = scaleLinear()
    .range([0, 2 * Math.PI]);

const y = scaleSqrt()
    .range([0, radius]);

const path = arc()
  .startAngle((d) => Math.max(0, Math.min(2 * Math.PI, x(d.x0))))
  .endAngle((d) => Math.max(0, Math.min(2 * Math.PI, x(d.x1))))
  .innerRadius((d) => Math.max(0, y(d.y0)))
  .outerRadius((d) => Math.max(0, y(d.y1)));

const arcKeyAccessor = (d) => d.filePath;

export class Example extends Component {
  constructor(props) {
    super(props);

    (this:any).setShowTop = this.setShowTop.bind(this);
    (this:any).setDuration = this.setDuration.bind(this);
  }

  state = {
    duration: 500,
    showTop: this.props.showTop,
  }

  setShowTop(e, value) {
    this.setState({
      showTop: value,
    });
  }

  setDuration(e, value) {
    this.setState({
      duration: Math.floor(value * 10000),
    });
  }

  render() {
    const { sortKey, data, dispatch } = this.props;
    const { duration, showTop } = this.state;

    return (
      <Paper style={{ padding: 20 }}>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <MarkdownElement text={description} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <h5>Show Top {showTop} States:</h5>
                <Slider
                  min={5} max={25} step={1}
                  value={showTop}
                  onChange={this.setShowTop}
                  onDragStop={() => dispatch(updateTopCount(showTop))}
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <h5>Transition Duration: {(duration / 1000).toFixed(1)} Seconds</h5>
                <Slider
                  defaultValue={0.1}
                  onChange={this.setDuration}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <Table
                  wrapperStyle={{ width: '100%' }}
                  onCellClick={(d) => dispatch(updateSortOrder(AGES[d]))}
                >
                  <TableBody displayRowCheckbox={false}>
                    {AGES.map((age) => {
                      const color = sortKey === age ? 'rgba(51,51,51,0.1)' : 'transparent';

                      return (
                        <TableRow
                          key={age}
                          style={{ backgroundColor: color }}
                        >
                          <TableRowColumn>{age}</TableRowColumn>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
              <div className="col-md-9 col-sm-9" style={{ padding: 0 }}>
                <h3>This example is under construction</h3>
                <Surface view={VIEW} trbl={TRBL}>
                  <g transform={`translate(${dims[0] / 2},${dims[1] / 2})`}>
                    {data.map((d) => {
                      return (
                        <path opacity={0.7} key={arcKeyAccessor(d)} fill={COLORS[d.depth]} stroke="grey" d={path(d)} />
                      );
                    })}
                  </g>
                </Surface>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

Example.propTypes = {
  data: PropTypes.array.isRequired,
  showTop: PropTypes.number.isRequired,
  sortKey: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const makeMapStateToProps = () => {
  const getSelectedData = makeGetSelectedData();
  const mapStateToProps = (state) => {
    return getSelectedData(state);
  };
  return mapStateToProps;
};


export default connect(makeMapStateToProps())(Example);
