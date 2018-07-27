import React from 'react';
import { Graph } from 'react-d3-graph';
import Config from './GraphConfig';
import GraphData from '../../data/GraphData';
import './GraphModule.css';
import ROOT_LISTENER from './listeners/indexListeners';
import filterData from './helper/filterData';
import rebuildGraphData from './helper/rebuildGraphData';
import RebuildedGraphData from '../../data/RebuildedGraphData';
import LinkTypes from '../../data/LinkTypes';
/**
 * Component to build and maintain graph
 */
class GraphModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      appearEl: false,
      coords: {
        x: 0,
        y: 0
      },
      innerText: '',
      NodesCounter: 1,
      activeNode: GraphData.rootNode
    };
    Object.values(LinkTypes).forEach(
      linkType => (this.state.filters[linkType] = true)
    );

    rebuildGraphData(GraphData);

    this.handleClickNode = this.handleClickNode.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleToggleNode = this.handleToggleNode.bind(this);
    this.handleCloseWindow = this.handleCloseWindow.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
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

  handleOpenMenu(e) {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  handleToggleNode(e) {
    const number = ROOT_LISTENER.openAndCloseNodes(
      this.state.activeNode,
      RebuildedGraphData
    );

    this.setState({
      NodesCounter: number,
      appearEl: false
    });
  }

  handleClickNode(nodeId) {
    const appearData = ROOT_LISTENER.clickNodeInGraph(nodeId);
    const closeType = RebuildedGraphData[nodeId].isClosed;
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
    const filteredFinalData = filterData(
      GraphData,
      RebuildedGraphData,
      this.state.filters
    );
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
            {this.state.isNodeClosed ? 'open ' : 'close '}nodes({Object.keys(
              RebuildedGraphData[this.state.activeNode]
            ).length - 3})
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
            <span>ВЫБРАННЫЕ ФИЛЬТРЫ:</span>
            {Object.values(LinkTypes).map(linkType => (
              <label key={linkType}>
                <input
                  type="checkbox"
                  name={linkType}
                  onChange={this.handleChangeFilter}
                  checked={this.state.filters[linkType]}
                />
                <div
                  className="GMFCheckBlock"
                  style={{
                    borderColor: linkType,
                    ...(this.state.filters[linkType]
                      ? {
                          borderStyle: 'solid',
                          borderRadius: '50%'
                        }
                      : {
                          borderBottomStyle: 'solid'
                        })
                  }}
                />
              </label>
            ))}
            <div
              className="GMFMenuBtn"
              onClick={this.handleOpenMenu}
              style={{
                [this.state.isMenuOpen
                  ? 'borderBottom'
                  : 'borderTop']: '10px solid #929497',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                [this.state.isMenuOpen ? 'borderTop' : 'borderBottom']: 'none'
              }}
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
