import React from 'react';
import { Graph } from './d3Graph';
import Config from './GraphConfig';
import GraphData from '../../data/GraphData';
import './GraphModule.css';
import ROOT_LISTENER from './listeners/indexListeners';
import filterData from './helper/filterData';
import rebuildGraphData from './helper/rebuildGraphData';
import RebuildedGraphData from '../../data/RebuildedGraphData';
import defaultGraphValues from '../../data/defaultGraphValues';
import LinkTypes from '../../data/LinkTypes';
import NodeTypes from '../../data/NodeTypes';
import { zoom } from 'd3-zoom';
import { select, event } from 'd3-selection';
/**
 * Component to build and maintain graph
 */
class GraphModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      appearEl: false,
      isMenuOpen: false,
      AppearElCoords: {
        x: 0,
        y: 0
      },
      OpenedNodeMove: {
        x: 0,
        y: 0
      },
      innerHeaderText: '',
      innerMainText: '',
      NodesCounter: 1,
      activeNode: GraphData.rootNode,
      isFullScreen: false,
      currentZoom: 1
    };
    Object.values(LinkTypes).forEach(
      linkType => (this.state.filters[linkType.id] = true)
    );

    rebuildGraphData(GraphData, RebuildedGraphData, defaultGraphValues);

    this.dragRangeStart = false;
    this.handleClickNode = this.handleClickNode.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleToggleNode = this.handleToggleNode.bind(this);
    this.handleCloseWindow = this.handleCloseWindow.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleChangeFullScreen = this.handleChangeFullScreen.bind(this);
    this.handleRangeDragStart = this.handleRangeDragStart.bind(this);
    this.handleRangeDrag = this.handleRangeDrag.bind(this);
    this.handleRangeDragEnd = this.handleRangeDragEnd.bind(this);
    this.handleRangeClick = this.handleRangeClick.bind(this);
    this.handleToDefault = this.handleToDefault.bind(this);
  }

  componentDidMount() {
    const zm = zoom()
      .scaleExtent([Config.minZoom, Config.maxZoom])
      .on('zoom', this.zoomed.bind(this));

    select('#GMVisuality-graph-wrapper svg').call(zm);
  }

  zoomed(e) {
    select('#GMVisuality-graph-container-zoomable').attr(
      'transform',
      event.transform
    );

    this.setState({ currentZoom: event.transform.k });
  }

  handleToDefault() {
    select('#GMVisuality-graph-container-zoomable').attr(
      'transform',
      `translate(0, 0) scale(1)`
    );
    this.setState({ currentZoom: 1 });
  }

  handleChangeFullScreen() {
    this.setState(prevState => ({ isFullScreen: !prevState.isFullScreen }));
  }

  handleRangeDragStart() {
    this.dragRangeStart = true;
  }

  handleRangeDrag(e) {
    if (!this.dragRangeStart) return;
    const curZoom = ROOT_LISTENER.zoomRangePosition(
      Config.minZoom,
      Config.maxZoom,
      document.querySelector('#GraphModule .GMFZoomRange'),
      e.pageX
    );

    const { width: svgWidth, height: svgHeight } = document
      .querySelector('#GraphModule #GMVisuality-graph-wrapper svg')
      .getBoundingClientRect();
    const x = (svgWidth / 2) * (-curZoom + 1);
    const y = (svgHeight / 2) * (-curZoom + 1);
    select('#GMVisuality-graph-container-zoomable').attr(
      'transform',
      `translate(${x}, ${y}) scale(${curZoom})`
    );
    this.setState({ currentZoom: curZoom });
    e.preventDefault();
  }

  handleRangeDragEnd(e) {
    if (!this.dragRangeStart) return;
    this.dragRangeStart = false;
  }

  handleRangeClick(e) {
    this.dragRangeStart = true;
    this.handleRangeDrag(e);
    this.dragRangeStart = false;
  }

  handleChangeFilter(e) {
    const name = e.target.name;
    ROOT_LISTENER.filterLinks(this.state.filters, name, RebuildedGraphData);
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
    ROOT_LISTENER.openAndCloseNodes(
      this.activeNode,
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues,
      this.state.filters
    );

    const number = ROOT_LISTENER.countOpenNodes(
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues
    );

    ROOT_LISTENER.findPosition(
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues
    );

    for (let key in RebuildedGraphData) {
      if (key === 'rootNode') continue;
      console.log(
        key,
        RebuildedGraphData[key].currentStepsToRoot,
        RebuildedGraphData[key].connectionsCounter
      );
    }

    console.log('------');

    const OpenedNodeMove = ROOT_LISTENER.moveToNewLocation(
      RebuildedGraphData,
      this.activeNode
    );

    this.setState({
      NodesCounter: number,
      appearEl: false,
      OpenedNodeMove,
      activeNode: this.activeNode
    });
  }

  handleClickNode(nodeId, e) {
    const appearData = ROOT_LISTENER.clickNodeInGraph(nodeId, GraphData);
    const closeType = RebuildedGraphData[nodeId].isClosed;
    this.activeNode = nodeId;
    this.setState({
      appearEl: true,
      AppearElCoords: {
        x:
          appearData.svgPosition.x > 370
            ? Math.round(appearData.svgPosition.x - 360)
            : Math.round(appearData.svgPosition.x + 40),
        y: Math.round(e.pageY - 30)
      },
      innerHeaderText: appearData.headerText,
      innerMainText: appearData.mainText,
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
      NodeTypes
    );

    const nodeDescription = (
      <div
        className="GMAppearBlock"
        style={{
          left: this.state.AppearElCoords.x,
          top: this.state.AppearElCoords.y
        }}
      >
        <div className="GMADescription">
          <h4>{this.state.innerHeaderText}</h4>
          <p>{this.state.innerMainText}</p>
        </div>
        <div className="GMAControl">
          <div className="GMAAppearNodesBtn" onClick={this.handleToggleNode}>
            {this.state.isNodeClosed ? 'Раскрыть ' : 'Свернуть '}связи({Object.keys(
              RebuildedGraphData[this.state.activeNode]
            ).length - 7})
          </div>
          <div className="GMACloseWindow" onClick={this.handleCloseWindow}>
            {' '}
            Отмена
          </div>
        </div>
      </div>
    );

    const AppearMenu = (
      <div className="GMFMenu">
        {Object.values(LinkTypes).map(linkType => (
          <label key={'menu' + linkType.id}>
            <input
              type="checkbox"
              name={linkType.id}
              onChange={this.handleChangeFilter}
              checked={this.state.filters[linkType.id]}
            />
            <div
              className="GMFMCheckBlock"
              style={{
                color: this.state.filters[linkType.id]
                  ? 'rgb(50, 200, 50)'
                  : 'transparent'
              }}
            >
              &#10004;
            </div>
            <div
              className="GMFMColorStroke"
              style={{ borderColor: linkType.id }}
            />
            <div className="GMFMFilterDescription">
              {linkType.longDescription}
            </div>
          </label>
        ))}
      </div>
    );

    return (
      <div
        id="GraphModule"
        onMouseMove={this.handleRangeDrag}
        onMouseUp={this.handleRangeDragEnd}
      >
        {this.state.appearEl ? nodeDescription : null}
        <div className="GMFiltersContainer">
          <h2 className="GMFTitle">Поиск связаных контрагентов</h2>
          <div className="GMFilters">
            <span>ВЫБРАННЫЕ ФИЛЬТРЫ:</span>
            {Object.values(LinkTypes).map(linkType => (
              <label key={linkType.id}>
                <input
                  type="checkbox"
                  name={linkType.id}
                  onChange={this.handleChangeFilter}
                  checked={this.state.filters[linkType.id]}
                />
                <div
                  className="GMFCheckBlock"
                  data-tooltip={linkType.shortDescription}
                  style={{
                    borderColor: linkType.id,
                    borderBottomStyle: this.state.filters[linkType.id]
                      ? 'none'
                      : 'solid'
                  }}
                >
                  {this.state.filters[linkType.id] ? (
                    <svg width="100%" height="100%">
                      <polygon
                        transform="scale(0.3)"
                        fill={linkType.id}
                        points="57.31 0 43.06 44.63 31.5 33.06 8 56.56 3.88 52.44 0 48.56 23.81 25.38 11.69 13.25 57.31 0"
                      />
                    </svg>
                  ) : null}
                </div>
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
            {this.state.isMenuOpen ? AppearMenu : null}
          </div>
        </div>
        <Graph
          id="GMVisuality"
          data={filteredFinalData}
          config={Config}
          onClickNode={this.handleClickNode}
          transform={this.state.currentZoom}
          numberNodes={this.state.NodesCounter}
          curNode={this.state.activeNode}
          moveNodeCoords={this.state.OpenedNodeMove}
        />
        <div className="GMFooter">
          <button className="GMFToDefault" onClick={this.handleToDefault}>
            В ИСХОДНОЕ ПОЛОЖЕНИЕ
          </button>
          <div className="GMFZoomContainer">
            <div className="GMFZoomRange" onClick={this.handleRangeClick}>
              <div
                className="GMFZFillRange"
                style={{
                  width: `${Math.round(
                    (this.state.currentZoom - Config.minZoom) /
                      ((Config.maxZoom - Config.minZoom) / 100)
                  )}%`
                }}
              >
                <div
                  className="GMFZCurrentPosition"
                  onMouseDown={this.handleRangeDragStart}
                />
              </div>
            </div>
            <button
              className="GMFZFullScreen"
              onClick={this.handleChangeFullScreen}
              style={{
                backgroundImage: this.state.isFullScreen
                  ? 'url(https://image.ibb.co/bz3J8o/normal.png)'
                  : 'url(https://image.ibb.co/hAGS18/full.png)'
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GraphModule;
