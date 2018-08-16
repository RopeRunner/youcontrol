import React from 'react';
import { Graph } from './d3Graph';
import Config from './GraphConfig';
import GraphData from '../../data/GraphData';
import './GraphModule.css';
import ROOT_LISTENER from './listeners/indexListeners';
import filterData from './helper/filterData';
import rebuildGraphData from './helper/rebuildGraphData';
import openMainNodes from './helper/openMainNodes';
import RebuildedGraphData from '../../data/RebuildedGraphData';
import defaultGraphValues from '../../data/defaultGraphValues';
import NodeTypes from '../../data/NodeTypes';
import { zoom, zoomIdentity } from 'd3-zoom';
import { select, event } from 'd3-selection';
import HOCHttpGetter from '../../HOCs/HOCHttpGetter';
/**
 * Component to build and maintain graph
 */
class GraphModule extends React.Component {
  constructor(props) {
    super(props);

    const filters = {};
    for (let baseTypeId in NodeTypes) {
      filters[baseTypeId] = {
        isActive: true,
        color: NodeTypes[baseTypeId].color,
        shortDescription: NodeTypes[baseTypeId].shortDescription,
        longDescription: NodeTypes[baseTypeId].longDescription
      };

      for (let typeId in NodeTypes[baseTypeId]) {
        if (
          typeof NodeTypes[baseTypeId][typeId] === 'string' ||
          typeId in filters
        )
          continue;

        filters[typeId] = {
          isActive: true,
          color: NodeTypes[baseTypeId][typeId].color,
          shortDescription: NodeTypes[baseTypeId][typeId].shortDescription,
          longDescription: NodeTypes[baseTypeId][typeId].longDescription
        };
      }
    }

    rebuildGraphData(
      GraphData,
      RebuildedGraphData,
      defaultGraphValues,
      NodeTypes,
      false
    );
    openMainNodes(
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues,
      filters
    );
    const counter = ROOT_LISTENER.countOpenNodes(
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues
    );

    this.state = {
      filters: filters,
      appearEl: false,
      isMenuOpen: false,
      addDataForm: false,
      AppearElCoords: {
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
      inputType: '',
      NodesCounter: counter,
      activeNode: GraphData.rootNode,
      isFullScreen: false,
      currentZoom: 1,
      transform: {
        x: 0,
        y: 0
      }
    };

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
    this.handleChooseParent = this.handleChooseParent.bind(this);
    this.handleChooseType = this.handleChooseType.bind(this);
  }

  componentDidMount() {
    this.zoomConfig();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      for (let key in RebuildedGraphData) {
        delete RebuildedGraphData[key];
      }
      rebuildGraphData(
        nextProps.data.data,
        RebuildedGraphData,
        defaultGraphValues,
        NodeTypes,
        true
      );
      openMainNodes(
        RebuildedGraphData,
        defaultGraphValues.NodeDefaultValues,
        this.state.filters
      );
      const counter = ROOT_LISTENER.countOpenNodes(
        RebuildedGraphData,
        defaultGraphValues.NodeDefaultValues
      );
      this.setState({
        NodesCounter: counter
      });
    }
  }

  zoomConfig() {
    this.zm = zoom()
      .scaleExtent([Config.minZoom, Config.maxZoom])
      .on('zoom', this.zoomed.bind(this));

    this.zoomTarget = select('#GMVisuality-graph-wrapper').call(this.zm);
  }

  zoomed() {
    if (this.dragRangeStart) {
      event.transform.x = this.state.transform.x;
      event.transform.y = this.state.transform.y;
    }
    select('#GMVisuality-graph-container-zoomable').attr(
      'transform',
      event.transform
    );

    if (this.dragRangeStart) return;

    this.setState({
      currentZoom: event.transform.k,
      transform: { x: event.transform.x, y: event.transform.y }
    });
  }

  handleToDefault() {
    this.zoomTarget.call(this.zm.transform, zoomIdentity);
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

    const x = this.state.transform.x + 550 * (this.state.currentZoom - curZoom);
    const y = this.state.transform.y + 300 * (this.state.currentZoom - curZoom);
    this.zoomTarget.call(
      this.zm.transform,
      zoomIdentity.scale(curZoom).translate(x, y)
    );
    this.setState({ currentZoom: curZoom, transform: { x, y } });
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
    ROOT_LISTENER.filterTypes(
      this.state.filters,
      name,
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues,
      NodeTypes
    );
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          [name]: {
            ...prevState.filters[name],
            isActive: !prevState.filters[name].isActive
          }
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
      this.state.activeNode,
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
      this.state.activeNode,
      500,
      false
    );

    this.setState({
      NodesCounter: number,
      appearEl: false
    });
  }

  handleClickNode(nodeId, e) {
    const appearData = ROOT_LISTENER.clickNodeInGraph(
      nodeId,
      RebuildedGraphData
    );
    const closeType = RebuildedGraphData[nodeId].isClosed;
    this.setState({
      appearEl: true,
      AppearElCoords: {
        x:
          appearData.svgPosition.x > 370
            ? Math.round(appearData.svgPosition.x - 360)
            : Math.round(appearData.svgPosition.x + 40),
        y: Math.round(e.pageY - 30)
      },
      activeNode: nodeId,
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
      inputConnectTo: '',
      inputParent: ''
    }));
  }

  handleFormSubmit(e) {
    const label = this.state.inpytLabel;
    const otherLabel = this.state.inputConnectTo;
    const nodeId = this.state.inputId;
    const descriptionHeader = this.state.descriptionHeader;
    const description = this.state.description;
    const parent = this.state.inputParent;
    const type = this.state.inputType;

    e.preventDefault();

    if (!otherLabel || !nodeId) {
      alert(
        'Недостаточно данных! Обязательные поля для заполнения: id и связь с нодой'
      );
      e.preventDefault();
      return;
    }

    const isParentRequire = !(type === 'LEGAL_ENTITY' || type === 'INDIVIDUAL');
    const isAlreadyCreated = nodeId in RebuildedGraphData;

    if (!isAlreadyCreated && isParentRequire && !parent) {
      alert('Для этого типа, родитель обязательный!');
      e.preventDefault();
      return;
    }

    let connectTo = null;
    let parentId = null;
    for (let key in RebuildedGraphData) {
      if (key === 'rootNode' || key === 'otherMainNodes') continue;

      if (RebuildedGraphData[key].label === otherLabel || key === otherLabel) {
        connectTo = key;
      }

      if (
        RebuildedGraphData[key].parentNode === parent ||
        RebuildedGraphData[key].label === parent ||
        key === parent
      ) {
        parentId = RebuildedGraphData[key].parentNode || key;
      }

      if (connectTo && (isAlreadyCreated || !isParentRequire || parentId))
        break;
    }

    if (!connectTo) {
      alert('Неверное имя ноды для подключения!');
      e.preventDefault();
      return;
    }

    if (!isAlreadyCreated && isParentRequire && !parentId) {
      alert('Родитель не найден!');
      e.preventDefault();
      return;
    }

    if (
      !isAlreadyCreated &&
      isParentRequire &&
      !(
        parentId === RebuildedGraphData[connectTo].parentNode ||
        connectTo === parentId
      )
    ) {
      alert('Созданная нода не связана ни с одним потомком родителя!');
      e.preventDefault();
      return;
    }

    let connectFrom = nodeId;
    if (!isAlreadyCreated) {
      GraphData.nodes.push({
        id: nodeId,
        headerText: descriptionHeader || label || nodeId,
        mainText:
          description || `this is a description about ${label || nodeId}`,
        nodeName: label || nodeId,
        NodeType: type,
        parentNode: parentId
      });
    }

    GraphData.links.push({
      source: connectFrom,
      target: connectTo
    });

    for (let key in RebuildedGraphData) {
      delete RebuildedGraphData[key];
    }
    rebuildGraphData(
      this.props.data.data,
      RebuildedGraphData,
      defaultGraphValues,
      NodeTypes,
      true
    );
    openMainNodes(
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues,
      this.state.filters
    );
    const counter = ROOT_LISTENER.countOpenNodes(
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues
    );

    this.setState({
      NodesCounter: counter,
      addDataForm: false,
      inputId: '',
      inputConnectTo: '',
      inputDescription: '',
      inputDescriptionHeader: '',
      inputLabel: '',
      inputParent: ''
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

  handleChooseParent(e) {
    this.setState({ inputParent: e.target.value });
  }

  handleChooseType(e) {
    this.setState({ inputType: e.target.value });
  }

  render() {
    const filteredFinalData = filterData(
      GraphData,
      RebuildedGraphData,
      defaultGraphValues.NodeDefaultValues,
      NodeTypes
    );

    let countRiachableNodes = 0;
    for (let key in RebuildedGraphData[this.state.activeNode]) {
      if (
        key in defaultGraphValues.NodeDefaultValues ||
        RebuildedGraphData[this.state.activeNode][key].isAppear ||
        !this.state.filters[RebuildedGraphData[key].NodeType].isActive ||
        (RebuildedGraphData[key].parentNode &&
          !this.state.filters[
            RebuildedGraphData[RebuildedGraphData[key].parentNode].NodeType
          ].isActive)
      )
        continue;

      countRiachableNodes++;
    }
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
            {this.state.isNodeClosed
              ? `Раскрыть связи(${countRiachableNodes})`
              : `Свернуть связи`}
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
        {Object.keys(this.state.filters).map(filter => (
          <label key={'menu' + this.state.filters[filter].color}>
            <input
              type="checkbox"
              name={filter}
              onChange={this.handleChangeFilter}
              checked={this.state.filters[filter].isActive}
            />
            <div
              className="GMFMCheckBlock"
              style={{
                color: this.state.filters[filter].isActive
                  ? 'rgb(50, 200, 50)'
                  : 'transparent'
              }}
            >
              &#10004;
            </div>
            <div
              className="GMFMColorStroke"
              style={{ borderColor: this.state.filters[filter].color }}
            />
            <div className="GMFMFilterDescription">
              {this.state.filters[filter].longDescription}
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
            value={this.state.inputId}
          />
          <input
            type="text"
            placeholder="Введите подпись ноды"
            onChange={this.handleChangeLabel}
            value={this.state.inputLabel}
          />
          <input
            type="text"
            placeholder="Введите заглавие описания"
            onChange={this.handleChangeDescriptionHeader}
            value={this.state.inputDescriptionHeader}
          />
          <textarea
            placeholder="Введите описание"
            onChange={this.handleChangeDescription}
            value={this.state.inputDescription}
          />
          <input
            type="text"
            placeholder="Введите подпись существующей ноды или id"
            onChange={this.handleChangeConnect}
            value={this.state.inputConnectTo}
          />
          <input
            type="text"
            placeholder="Введите имя или id родителя"
            onChange={this.handleChooseParent}
            value={this.state.inputParent}
          />
          <div className="ADFChooseType">
            {Object.keys(this.state.filters).map(filter => (
              <label key={`input_${this.state.filters[filter].color}`}>
                <input
                  type="radio"
                  name="chooseType"
                  value={filter}
                  onChange={this.handleChooseType}
                />
                <div />
                <span>{this.state.filters[filter].shortDescription}</span>
              </label>
            ))}
          </div>
          <input type="submit" value="Создать ноду" />
          <div className="ADFAttention">
            ВНИМАНИЕ! При добавлении ноды, граф будет полностью закрыт!
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
            {Object.keys(this.state.filters).map(filter => (
              <label key={this.state.filters[filter].color}>
                <input
                  type="checkbox"
                  name={filter}
                  onChange={this.handleChangeFilter}
                  checked={this.state.filters[filter].isActive}
                />
                <div
                  className="GMFCheckBlock"
                  data-tooltip={this.state.filters[filter].shortDescription}
                  style={{
                    borderColor: this.state.filters[filter].color,
                    borderBottomStyle: this.state.filters[filter].isActive
                      ? 'none'
                      : 'solid'
                  }}
                >
                  {this.state.filters[filter].isActive ? (
                    <svg width="100%" height="100%">
                      <polygon
                        transform="scale(0.25)"
                        fill={this.state.filters[filter].color}
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
        {this.props.data ? null : (
          <div className="loadingBlock">Loading. Please wait...</div>
        )}
        <Graph
          id="GMVisuality"
          data={filteredFinalData}
          config={Config}
          onClickNode={this.handleClickNode}
          transform={this.state.currentZoom}
          curNode={this.state.activeNode}
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

export default HOCHttpGetter(
  GraphModule,
  'https://api.youscore.com.ua/v1/relations/start/14360570?apiKey=4c0000001dc0d43258a4fc1504cb88b9299f7fb8'
);
