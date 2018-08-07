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
      addDataForm: false,
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
      inputId: '',
      inputLabel: '',
      inputDescriptionHeader: '',
      inputDescription: '',
      inputConnectTo: '',
      NodesCounter: 1,
      activeNode: GraphData.rootNode,
      isFullScreen: false,
      currentZoom: 1
    };
    Object.values(LinkTypes).forEach(
      linkType => (this.state.filters[linkType.id] = true)
    );

    rebuildGraphData(GraphData, RebuildedGraphData, defaultGraphValues);

    this.activeNode = GraphData.rootNode;
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
    this.handleAppearForm = this.handleAppearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeLabel = this.handleChangeLabel.bind(this);
    this.handleChangeDescriptionHeader = this.handleChangeDescriptionHeader.bind(
      this
    );
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeConnect = this.handleChangeConnect.bind(this);
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
      defaultGraphValues.NodeDefaultValues,
      this.activeNode
    );

    const OpenedNodeMove = ROOT_LISTENER.moveToNewLocation(
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues,
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

  handleAppearForm() {
    this.setState(prevState => ({
      addDataForm: !prevState.addDataForm,
      isMenuOpen: false,
      appearEl: false,
      inputId: '',
      inputLabel: '',
      inputDescription: '',
      inputDescriptionHeader: '',
      inputConnectTo: ''
    }));
  }

  handleFormSubmit(e) {
    const label = this.state.inpytLabel;
    const otherLabel = this.state.inputConnectTo;
    const nodeId = this.state.inputId;
    const descriptionHeader = this.state.descriptionHeader;
    const description = this.state.description;
    if (!otherLabel || !nodeId) {
      alert('Недостаточно данных!');
      e.preventDefault();
      return;
    }

    let connectTo = null;
    for (let key in RebuildedGraphData) {
      if (key === 'rootNode') continue;

      if (RebuildedGraphData[key].label === otherLabel || key === otherLabel) {
        connectTo = key;
        break;
      }
    }

    if (!connectTo) {
      alert('Неверное имя ноды для подключения!');
      e.preventDefault();
      return;
    }

    let connectFrom = nodeId;
    if (!(nodeId in RebuildedGraphData)) {
      GraphData.nodes.push({
        id: nodeId,
        headerText: descriptionHeader || label || nodeId,
        mainText:
          description || `this is a description about ${label || nodeId}`,
        nodeName: label || nodeId,
        NodeType: 'LEGAL_ENTITY',
        parentNode: null
      });
    }

    GraphData.links.push({
      source: connectFrom,
      target: connectTo
    });

    for (let key in RebuildedGraphData) {
      delete RebuildedGraphData[key];
    }
    rebuildGraphData(GraphData, RebuildedGraphData, defaultGraphValues);

    this.setState({
      addDataForm: false,
      inputId: '',
      inputConnectTo: '',
      inputDescription: '',
      inputDescriptionHeader: '',
      inputLabel: ''
    });

    e.preventDefault();
  }

  handleChangeId(e) {
    this.setState({ inputId: e.target.value });
  }

  handleChangeLabel(e) {
    this.setState({ inputLabel: e.target.value });
  }

  handleChangeDescriptionHeader(e) {
    this.setState({ inputDescriptionHeader: e.target.value });
  }

  handleChangeDescription(e) {
    this.setState({ inputDescription: e.target.value });
  }

  handleChangeConnect(e) {
    this.setState({ inputConnectTo: e.target.value });
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
              RebuildedGraphData[this.activeNode]
            ).length -
              Object.keys(defaultGraphValues.NodeDefaultValues).length})
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

    const AppearDataForm = (
      <div className="ADFContainer">
        <div className="ADFBlackBackground" onClick={this.handleAppearForm} />
        <form className="AppearDataForm" onSubmit={this.handleFormSubmit}>
          <h2>Форма создания ноды</h2>
          <input
            type="text"
            placeholder="Введите id"
            onChange={this.handleChangeId}
          />
          <input
            type="text"
            placeholder="Введите подпись ноды"
            onChange={this.handleChangeLabel}
          />
          <input
            type="text"
            placeholder="Введите заглавие описания"
            onChange={this.handleChangeDescriptionHeader}
          />
          <textarea
            placeholder="Введите описание"
            onChange={this.handleChangeDescription}
          />
          <input
            type="text"
            placeholder="Введите подпись существующей ноды или id"
            onChange={this.handleChangeConnect}
          />
          <input type="submit" value="Создать ноду" />
          <div className="ADFAttention">
            ВНИМАНИЕ! При добавлении ноды граф будет полностью закрыт!
          </div>
        </form>
      </div>
    );

    return (
      <div
        id="GraphModule"
        onMouseMove={this.handleRangeDrag}
        onMouseUp={this.handleRangeDragEnd}
      >
        {this.state.appearEl ? nodeDescription : null}
        {this.state.addDataForm ? AppearDataForm : null}
        <div className="GMFiltersContainer">
          <h2 className="GMFTitle">Поиск связаных контрагентов</h2>
          <div className="GMFilters">
            <div className="GMFDataFormBtn" onClick={this.handleAppearForm}>
              +
            </div>
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
