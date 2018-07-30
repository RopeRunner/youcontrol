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
      AppearElCoords: {
        x: 0,
        y: 0
      },
      innerText: '',
      NodesCounter: 1,
      activeNode: GraphData.rootNode,
      isFullScreen: false,
      currentZoom: 1
    };
    Object.values(LinkTypes).forEach(
      linkType => (this.state.filters[linkType.id] = true)
    );

    rebuildGraphData(GraphData);

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
    this.handleToDefault = this.handleToDefault.bind(this);
  }

  componentDidMount() {
    function zoomed(e) {
      select('#GMVisuality-graph-container-zoomable').attr(
        'transform',
        `translate(${event.transform.x}, ${event.transform.y}) scale(${
          event.transform.k
        })`
      );
      this.setState({ currentZoom: event.transform.k });
    }

    const zm = zoom()
      .scaleExtent([Config.minZoom, Config.maxZoom])
      .on('zoom', zoomed.bind(this));

    select('#GMVisuality-graph-wrapper svg').call(zm);
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

  handleRangeDragEnd() {
    if (!this.dragRangeStart) return;
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
    const number = ROOT_LISTENER.openAndCloseNodes(
      this.state.activeNode,
      RebuildedGraphData,
      this.state.filters
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
      AppearElCoords: {
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
          left: this.state.AppearElCoords.x,
          top: this.state.AppearElCoords.y
        }}
      >
        <div className="GMADescription">{this.state.innerText}</div>
        <div className="GMAControl">
          <div className="GMAAppearNodesBtn" onClick={this.handleToggleNode}>
            {this.state.isNodeClosed ? 'open ' : 'close '}nodes({Object.keys(
              RebuildedGraphData[this.state.activeNode]
            ).length - 2})
          </div>
          <div className="GMACloseWindow" onClick={this.handleCloseWindow}>
            {' '}
            Cancel
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
                  data-position="bottom"
                  style={{
                    borderColor: linkType.id,
                    ...(this.state.filters[linkType.id]
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
            {this.state.isMenuOpen ? AppearMenu : null}
          </div>
        </div>
        <Graph
          id="GMVisuality"
          data={filteredFinalData}
          config={Config}
          onClickNode={this.handleClickNode}
        />
        <div className="GMFooter">
          <button className="GMFToDefault" onClick={this.handleToDefault}>
            В ИСХОДНОЕ ПОЛОЖЕНИЕ
          </button>
          <div className="GMFZoomContainer">
            <div className="GMFZoomRange">
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
