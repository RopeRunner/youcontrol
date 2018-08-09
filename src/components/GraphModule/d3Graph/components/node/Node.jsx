import React from 'react';

import CONST from './node.const';

import nodeHelper from './node.helper';

/**
 * Node component is responsible for encapsulating node render.
 * @example
 * const onClickNode = function(nodeId) {
 *      window.alert('Clicked node', nodeId);
 * };
 *
 * const onMouseOverNode = function(nodeId) {
 *      window.alert('Mouse over node', nodeId);
 * };
 *
 * const onMouseOutNode = function(nodeId) {
 *      window.alert('Mouse out node', nodeId);
 * };
 *
 * <Node
 *     id='nodeId'
 *     cx=22
 *     cy=22
 *     fill='green'
 *     fontSize=10
 *     fontColor='black'
 *     fontWeight='normal'
 *     dx=90
 *     label='label text'
 *     opacity=1
 *     renderLabel=true
 *     size=200
 *     stroke='none'
 *     strokeWidth=1.5
 *     svg='assets/my-svg.svg'
 *     type='square'
 *     className='node'
 *     onClickNode={onClickNode}
 *     onMouseOverNode={onMouseOverNode}
 *     onMouseOutNode={onMouseOutNode} />
 */
export default class Node extends React.Component {
  /**
   * Handle click on the node.
   * @returns {undefined}
   */
  handleOnClickNode = e =>
    this.props.onClickNode && this.props.onClickNode(this.props.id, e);

  /**
   * Handle mouse over node event.
   * @returns {undefined}
   */
  handleOnMouseOverNode = () =>
    this.props.onMouseOverNode && this.props.onMouseOverNode(this.props.id);

  /**
   * Handle mouse out node event.
   * @returns {undefined}
   */
  handleOnMouseOutNode = () =>
    this.props.onMouseOut && this.props.onMouseOut(this.props.id);

  render() {
    const nodeProps = {
      cursor: this.props.cursor,
      onClick: this.handleOnClickNode,
      onMouseOut: this.handleOnMouseOutNode,
      onMouseOver: this.handleOnMouseOverNode,
      opacity: this.props.opacity
    };

    const textProps = {
      dx: this.props.dx || CONST.NODE_LABEL_DX,
      dy: CONST.NODE_LABEL_DY,
      fill: this.props.fontColor,
      fontSize:
        this.props.size > 700 ? this.props.fontSize + 3 : this.props.fontSize,
      fontWeight: this.props.fontWeight,
      opacity: this.props.opacity
    };

    const size = this.props.size;
    let gtx = this.props.cx;
    let gty = this.props.cy;
    let label;
    let node;

    if (this.props.svg) {
      const height = (size > 700 ? size / (size / 600) : size) / 30;
      const width = (size > 700 ? size / (size / 600) : size) / 30;
      const tx = width / 4;
      const ty = height / 4;
      const transform = `translate(${tx},${ty})`;

      nodeProps.d = nodeHelper.buildSvgSymbol(size, this.props.type);
      nodeProps.fill = this.props.fill;
      nodeProps.stroke = this.props.stroke;
      nodeProps.strokeWidth = this.props.strokeWidth;

      label = (
        <text {...textProps} transform={transform}>
          {this.props.label}
        </text>
      );
      node = (
        <g>
          <path {...nodeProps} transform={transform} />
          <image
            {...nodeProps}
            href={this.props.svg}
            width={width}
            height={height}
            transform={`translate(${-tx}, ${-ty})`}
          />
        </g>
      );

      // svg offset transform regarding svg width/height
      gtx -= tx;
      gty -= ty;
    } else {
      nodeProps.d = nodeHelper.buildSvgSymbol(size, this.props.type);
      nodeProps.fill = this.props.fill;
      nodeProps.stroke = this.props.stroke;
      nodeProps.strokeWidth = this.props.strokeWidth;

      label = <text {...textProps}>{this.props.label}</text>;
      node = <path {...nodeProps} />;
    }

    const gProps = {
      className: this.props.className,
      cx: this.props.cx,
      cy: this.props.cy,
      id: this.props.id,
      transform: `translate(${gtx},${gty})`
    };

    return (
      <g {...gProps}>
        {node}
        {this.props.renderLabel && label}
      </g>
    );
  }
}
