// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import Title from 'react-title-component';
import CodeExample from 'docs/src/components/CodeExample';
import MarkdownElement from 'docs/src/components/MarkdownElement';

import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';

const NodeGroupDocs = (props) => {
  const { route: { docContext } } = props;

  return (
    <div>
      <Title render={(previousTitle) => `createNodeGroup - ${previousTitle}`} />
      <MarkdownElement text={docContext('./createNodeGroup/README1.md')} />
      <CodeExample
        code={docContext('./createNodeGroup/Example1')}
        title="Example 1: Simple Bars"
      >
        <Example1 />
      </CodeExample>
      <CodeExample
        code={docContext('./createNodeGroup/Example2')}
        title="Example 2: Bars w/ More Complex Timing"
      >
        <Example2 />
      </CodeExample>
      <MarkdownElement text={docContext('./createNodeGroup/README2.md')} />
      <CodeExample
        code={docContext('./createNodeGroup/Example3')}
        title="Example 3: Passing Arrays of Transition Objects"
      >
        <Example3 />
      </CodeExample>
      <MarkdownElement text={docContext('./createNodeGroup/README3.md')} />
      <CodeExample
        code={docContext('./createNodeGroup/Example4')}
        title="Example 4: SVG Circles"
      >
        <Example4 />
      </CodeExample>
      <MarkdownElement text={docContext('./createNodeGroup/README4.md')} />
    </div>
  );
};

NodeGroupDocs.propTypes = {
  route: PropTypes.object.isRequired,
};

export default NodeGroupDocs;
