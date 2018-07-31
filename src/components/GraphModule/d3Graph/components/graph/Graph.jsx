import React from 'react';

import { drag as d3Drag } from 'd3-drag';
import {
  forceLink as d3ForceLink,
  forceCollide as d3ForceCollide
} from 'd3-force';
import {
  select as d3Select,
  selectAll as d3SelectAll,
  event as d3Event
} from 'd3-selection';
import { zoom as d3Zoom } from 'd3-zoom';

import CONST from './graph.const';
import DEFAULT_CONFIG from './graph.config';
import ERRORS from '../../err';

import * as graphRenderer from './graph.renderer';
import * as graphHelper from './graph.helper';
import utils from '../../utils';

// Some d3 constant values
const D3_CONST = {
  FORCE_LINK_STRENGTH: 1,
  LINK_IDEAL_DISTANCE: 200,
  SIMULATION_ALPHA_TARGET: 0.05
};

class Graph extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.id) {
      utils.throwErr(this.constructor.name, ERRORS.GRAPH_NO_ID_PROP);
    }

    this.state = graphHelper.initializeGraphState(this.props, this.state);
  }

  _graphForcesConfig() {
    this.state.simulation.nodes(this.state.d3Nodes).on('tick', this._tick);

    const forceLink = d3ForceLink(this.state.d3Links)
      .id(l => l.id)
      .distance(D3_CONST.LINK_IDEAL_DISTANCE)
      .strength(D3_CONST.FORCE_LINK_STRENGTH);

    this.state.simulation
      .force(CONST.LINK_CLASS_NAME, forceLink)
      .force(CONST.NODE_CLASS_NAME, d3ForceCollide().radius(100));

    const customNodeDrag = d3Drag()
      .on('start', this._onDragStart)
      .on('drag', this._onDragMove)
      .on('end', this._onDragEnd);

    d3Select(`#${this.state.id}-${CONST.GRAPH_WRAPPER_ID}`)
      .selectAll('.node')
      .call(customNodeDrag);
  }

  _onDragEnd = () =>
    !this.state.config.staticGraph &&
    this.state.config.automaticRearrangeAfterDropNode &&
    this.state.simulation
      .alphaTarget(D3_CONST.SIMULATION_ALPHA_TARGET)
      .restart();

  _onDragMove = (ev, index, nodeList) => {
    const id = nodeList[index].id;

    if (!this.state.config.staticGraph) {
      let draggedNode = this.state.nodes[id];

      draggedNode.x += d3Event.dx;
      draggedNode.y += d3Event.dy;

      draggedNode['fx'] = draggedNode.x;
      draggedNode['fy'] = draggedNode.y;

      this._tick();
    }
  };

  _onDragStart = () => this.pauseSimulation();

  _setNodeHighlightedValue = (id, value = false) =>
    this._tick(
      graphHelper.updateNodeHighlightedValue(
        this.state.nodes,
        this.state.links,
        this.state.config,
        id,
        value
      )
    );

  _tick = (state = {}) => this.setState(state);

  onMouseOverNode = id => {
    this.props.onMouseOverNode && this.props.onMouseOverNode(id);

    this.state.config.nodeHighlightBehavior &&
      this._setNodeHighlightedValue(id, true);
  };

  onMouseOutNode = id => {
    this.props.onMouseOutNode && this.props.onMouseOutNode(id);

    this.state.config.nodeHighlightBehavior &&
      this._setNodeHighlightedValue(id, false);
  };

  onMouseOverLink = (source, target) => {
    this.props.onMouseOverLink && this.props.onMouseOverLink(source, target);

    if (this.state.config.linkHighlightBehavior) {
      this.state.highlightedLink = { source, target };

      this._tick();
    }
  };

  onMouseOutLink = (source, target) => {
    this.props.onMouseOutLink && this.props.onMouseOutLink(source, target);

    if (this.state.config.linkHighlightBehavior) {
      this.state.highlightedLink = undefined;

      this._tick();
    }
  };

  pauseSimulation = () => this.state.simulation.stop();

  resetNodesPositions = () => {
    if (!this.state.config.staticGraph) {
      for (let nodeId in this.state.nodes) {
        let node = this.state.nodes[nodeId];

        if (node.fx && node.fy) {
          Reflect.deleteProperty(node, 'fx');
          Reflect.deleteProperty(node, 'fy');
        }
      }

      this.state.simulation
        .alphaTarget(D3_CONST.SIMULATION_ALPHA_TARGET)
        .restart();

      this._tick();
    }
  };

  restartSimulation = () =>
    !this.state.config.staticGraph && this.state.simulation.restart();

  componentWillReceiveProps(nextProps) {
    const newGraphElements =
      nextProps.data.nodes.length !== this.state.nodesInputSnapshot.length ||
      nextProps.data.links.length !== this.state.linksInputSnapshot.length ||
      !utils.isDeepEqual(nextProps.data, {
        nodes: this.state.nodesInputSnapshot,
        links: this.state.linksInputSnapshot
      });
    const state = newGraphElements
      ? graphHelper.initializeGraphState(nextProps, this.state)
      : this.state;

    const newConfig = nextProps.config || {};
    const configUpdated =
      newConfig &&
      !utils.isObjectEmpty(newConfig) &&
      !utils.isDeepEqual(newConfig, this.state.config);
    const config = configUpdated
      ? utils.merge(DEFAULT_CONFIG, newConfig)
      : this.state.config;

    newGraphElements && this.pauseSimulation();

    const transform =
      newConfig.panAndZoom !== this.state.config.panAndZoom
        ? 1
        : this.state.transform;

    this.setState({
      ...state,
      config,
      newGraphElements,
      configUpdated,
      transform
    });
  }

  componentDidUpdate() {
    this.state.config.staticGraph && this.pauseSimulation();

    if (!this.state.config.staticGraph && this.state.newGraphElements) {
      this._graphForcesConfig();
      this.setState({ newGraphElements: false });
    }
  }

  componentDidMount() {
    if (!this.state.config.staticGraph) {
      this._graphForcesConfig();
    }
  }

  componentWillUnmount() {
    this.pauseSimulation();
  }

  onClickNode = clickedNodeId => {
    if (this.state.config.collapsible) {
      const disconnectedLeafNodesPartialState = graphHelper.disconnectLeafNodeConnections(
        clickedNodeId,
        this.state.links,
        this.state.d3Links
      );

      this._tick({ ...disconnectedLeafNodesPartialState });
    }

    this.props.onClickNode && this.props.onClickNode(clickedNodeId);
  };

  render() {
    const { nodes, links } = graphRenderer.buildGraph(
      this.state.nodes,
      {
        onClickNode: this.onClickNode,
        onMouseOverNode: this.onMouseOverNode,
        onMouseOut: this.onMouseOutNode
      },
      this.state.d3Links,
      this.state.links,
      {
        onClickLink: this.props.onClickLink,
        onMouseOverLink: this.onMouseOverLink,
        onMouseOutLink: this.onMouseOutLink
      },
      this.state.config,
      this.state.highlightedNode,
      this.state.highlightedLink,
      this.state.transform
    );

    const svgStyle = {
      height: this.state.config.height,
      width: this.state.config.width
    };

    return (
      <div id={`${this.state.id}-${CONST.GRAPH_WRAPPER_ID}`}>
        <svg style={svgStyle}>
          <g id={`${this.state.id}-${CONST.GRAPH_CONTAINER_ID}`}>
            {links}
            {nodes}
          </g>
        </svg>
      </div>
    );
  }
}

export default Graph;