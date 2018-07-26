import React from 'react';
import { Graph } from 'react-d3-graph';
import Config from './GraphConfig';
import GraphData from '../../data/GraphData';
import './GraphModule.css';
import ROOT_LISTENER from './listeners/indexListeners';
import filterData from './helper/filterData';
/**
 * Component to build and maintain graph
 */
class GraphModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        current: true,
        new: true,
        old: true
      },
      appearEl: false,
      coords: {
        x: 0,
        y: 0
      },
      innerText: '',
      NodesCounter: 1,
      activeNode: null
    };
    GraphData.nodes.forEach(node => {
      if (node.id === GraphData.rootNode) node.isAppear = true;
    });
    this.handleClickNode = this.handleClickNode.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleToggleNode = this.handleToggleNode.bind(this);
    this.handleCloseWindow = this.handleCloseWindow.bind(this);
  }

  handleChangeFilter(e) {
    const name = e.target.name;
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          [name]: !prevState.filters[name]
        }
      };
    });
  }

  handleToggleNode(e) {
    const number = ROOT_LISTENER.openAndCloseNodes(
      this.state.activeNode,
      GraphData
    );

    this.setState({
      NodesCounter: number,
      appearEl: false
    });
  }

  handleClickNode(nodeId) {
    const appearData = ROOT_LISTENER.clickNodeInGraph(nodeId);
    const closeType = ROOT_LISTENER.checkNodeIsClosed(nodeId, GraphData.nodes);
    this.setState({
      appearEl: true,
      coords: {
        x: Math.round(appearData.svgPosition.x - 260),
        y: Math.round(appearData.svgPosition.y - 20)
      },
      innerText: appearData.text,
      activeNode: nodeId,
      isNodeClosed: closeType
    });
  }

  handleCloseWindow() {
    this.setState({ appearEl: false });
  }

  render() {
    console.log('hi');

    const filteredFinalData = filterData(GraphData, this.state.filters);
    const nodeDescription = (
      <div
        className="GMAppearBlock"
        style={{
          left: this.state.coords.x,
          top: this.state.coords.y
        }}
      >
        <div className="GMADescription">{this.state.innerText}</div>
        <div className="GMAControl">
          <div className="GMAAppearNodesBtn" onClick={this.handleToggleNode}>
            {this.state.isNodeClosed ? 'open ' : 'close '}nodes
          </div>
          <div className="GMACloseWindow" onClick={this.handleCloseWindow}>
            {' '}
            Cancel
          </div>
        </div>
      </div>
    );

    return (
      <div id="GraphModule">
        {this.state.appearEl ? nodeDescription : null}
        <div className="GMFiltersContainer">
          <h2 className="GMFTitle">Поиск связаных контрагентов</h2>
          <div className="GMFilters">
            <input
              type="checkbox"
              onChange={this.handleChangeFilter}
              name="current"
              checked={this.state.filters.current}
            />
            <input
              type="checkbox"
              onChange={this.handleChangeFilter}
              name="old"
              checked={this.state.filters.old}
            />
            <input
              type="checkbox"
              onChange={this.handleChangeFilter}
              name="new"
              checked={this.state.filters.new}
            />
          </div>
        </div>
        <Graph
          id="GMVisuality"
          data={filteredFinalData}
          config={Config}
          onClickNode={this.handleClickNode}
        />
      </div>
    );
  }
}

export default GraphModule;
