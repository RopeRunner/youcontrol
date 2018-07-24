import React from 'react';
import { Graph } from 'react-d3-graph';
import Config from './GraphConfig';
import GraphData from '../../data/GraphData';
/**
 * Component to build and maintain graph
 */
class GraphModule extends React.Component {
  render() {
    return <Graph config={Config} data={GraphData} id={'graph-id'} />;
  }
}

export default GraphModule;
