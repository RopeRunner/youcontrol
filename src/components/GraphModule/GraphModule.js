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
      innerText: 'hello world'
    };
    this.handleClickNode = this.handleClickNode.bind(this);
    this.handleMouseOutNode = this.handleMouseOutNode.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
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

  handleMouseOutNode(nodeId) {
    // this.setState({
    //   appearEl: false,
    //   coords: {
    //     x: 0,
    //     y: 0
    //   },
    //   innerText: ''
    // });
  }

  handleClickNode(nodeId) {
    const appearData = ROOT_LISTENER.clickNodeInGraph(nodeId);
    this.setState({
      appearEl: true,
      coords: {
        x: Math.round(appearData.svgPosition.x - 190),
        y: Math.round(appearData.svgPosition.y - 20)
      },
      innerText: appearData.text
    });
  }

  render() {
    let filteredGraphLinks = GraphData.links.filter(link => {
      return this.state.filters[link.linkType];
    });

    filteredGraphLinks = filteredGraphLinks.map(link => {
      let color;
      switch (link.linkType) {
        case 'current':
          color = 'green';
          break;
        case 'old':
          color = 'red';
          break;
        case 'new':
          color = 'darkcyan';
          break;
        default:
          throw new Error('unknown type: ' + link.linkType);
      }

      return {
        source: link.source,
        target: link.target,
        color: color
      };
    });

    const finalData = {
      links: filteredGraphLinks,
      nodes: [...GraphData.nodes]
    };

    const nodeDescription = (
      <div
        className="GMAppearBlock"
        style={{
          left: this.state.coords.x,
          top: this.state.coords.y,
          opacity: 1
        }}
      >
        {this.state.innerText}
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
          data={finalData}
          config={Config}
          onClickNode={this.handleClickNode}
          onMouseOutNode={this.handleMouseOutNode}
        />
      </div>
    );
  }
}

export default GraphModule;
