import React from 'react';
import { Graph } from 'react-d3-graph';
import Config from './GraphConfig';
import GraphData from '../../data/GraphData';
import './GraphModule.css';
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
      }
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

  handleClickNode(nodeId) {
    if (this.appearBlock) return;
    const svgPosition = document.getElementById(nodeId).getBoundingClientRect();
    this.appearBlock = document.createElement('div');
    this.appearBlock.style.left = `${Math.round(svgPosition.x - 190)}px`;
    this.appearBlock.style.top = `${Math.round(svgPosition.y - 20)}px`;
    this.appearBlock.setAttribute('class', 'GMAppearBlock');
    for (let i = 0; i < GraphData.nodes.length; i++) {
      const el = GraphData.nodes[i];
      if (el.id === nodeId) {
        this.appearBlock.innerHTML = el.text;
        break;
      }
    }
    document.getElementById('GraphModule').appendChild(this.appearBlock);
    setTimeout(
      () => (this.appearBlock ? (this.appearBlock.style.opacity = 1) : false),
      20
    );
  }

  handleMouseOutNode(nodeId) {
    if (this.appearBlock)
      document.getElementById('GraphModule').removeChild(this.appearBlock);
    this.appearBlock = null;
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

    return (
      <div id="GraphModule">
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
