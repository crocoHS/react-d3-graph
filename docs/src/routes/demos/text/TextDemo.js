// @flow weak
import React from 'react';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Chart from 'resonance/Chart';
import Text from 'resonance/Text';

export default function TextDemo() {
  return (
    <Chart>
      <Text y={12} textType="headline">
        Headline
      </Text>
      <Text y={30} textType="subheading" textFill="secondary">
        Sub-Heading
      </Text>
      <Text y={60} textType="body1">
        Some body1 text using the the primary fill.
      </Text>
      <Text y={80} textType="body1" textFill="secondary">
        Some body1 text using the the secondary fill.
      </Text>
      <Text y={100} textType="body2">
        Some body1 text using the the primary fill.
      </Text>
      <Text y={120} textType="body2" textFill="secondary">
        Some body1 text using the the secondary fill.
      </Text>
      <Text y={150} textType="body2" style={{ fill: 'steelblue' }}>
        A <tspan fill="tomato" fontSize={20}>{'"tspan"'}</tspan> and custom text fill.
      </Text>
    </Chart>
  );
}

TextDemo.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};
