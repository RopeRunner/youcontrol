import RebuildedGraphData from '../../../data/RebuildedGraphData';
import colorGiver from './colorGiver';

const rebuildGraphData = (data, linkTypes, nodeTypes) => {
  RebuildedGraphData.rootNode = data.rootNode;
  data.nodes.forEach(node => {
    RebuildedGraphData[node.id] = {
      isClosed: true,
      isAppear: false,
      NodeType: node.NodeType,
      x: 0,
      y: 0,
      fx: null,
      fy: null
    };
  });

  RebuildedGraphData[data.rootNode].isAppear = true;
  RebuildedGraphData[data.rootNode].x =
    document.documentElement.clientWidth / 2;
  RebuildedGraphData[data.rootNode].y =
    document.documentElement.clientHeight / 3;

  data.links.forEach(link => {
    const target1 = link.target;
    const target2 = link.source;

    RebuildedGraphData[target1][target2] = {
      linkType: link.color,
      stepsToRoot: 0
    };

    RebuildedGraphData[target2][target1] = {
      linkType: link.color,
      stepsToRoot: 0
    };
  });

  const currentNodes = [];
  const passedNodes = {};
  currentNodes.push(data.rootNode);

  while (currentNodes.length) {
    const curNode = currentNodes.shift();
    passedNodes[curNode] = true;
    let NodeType =
      RebuildedGraphData[curNode].NodeType in nodeTypes
        ? RebuildedGraphData[curNode].NodeType
        : false;

    for (let key in RebuildedGraphData[curNode]) {
      if (
        key === 'isClosed' ||
        key === 'isAppear' ||
        key === 'x' ||
        key === 'y' ||
        key === 'NodeType' ||
        key === 'fx' ||
        key === 'fy'
      )
        continue;
      if (key === RebuildedGraphData.rootNode) {
        RebuildedGraphData[curNode][key].stepsToRoot = 1;
        continue;
      }

      if (!(key in passedNodes)) currentNodes.push(key);

      for (let value in RebuildedGraphData[key]) {
        if (
          value === 'isClosed' ||
          value === 'isAppear' ||
          value === 'x' ||
          value === 'y' ||
          value === 'NodeType' ||
          value === 'fx' ||
          value === 'fy'
        )
          continue;
        const steps = RebuildedGraphData[key][value].stepsToRoot;
        if (steps) {
          RebuildedGraphData[curNode][key].stepsToRoot = steps + 1;
          break;
        }
      }
    }

    if (!NodeType) {
      for (let key in RebuildedGraphData[curNode]) {
        if (
          key === 'isClosed' ||
          key === 'isAppear' ||
          key === 'x' ||
          key === 'y' ||
          key === 'NodeType' ||
          key === 'fx' ||
          key === 'fy'
        )
          continue;
        if (RebuildedGraphData[curNode][key].stepsToRoot) {
          RebuildedGraphData[curNode].NodeType =
            RebuildedGraphData[key].NodeType;
          break;
        }
      }
    } else {
      RebuildedGraphData[curNode].NodeType = NodeType;
    }
  }

  data.links.forEach(link => {
    if (RebuildedGraphData[link.target][link.source].stepsToRoot) {
      RebuildedGraphData[link.target][
        link.source
      ].linkType = RebuildedGraphData[link.target][
        link.source
      ].color = colorGiver(RebuildedGraphData[link.source].NodeType);
      RebuildedGraphData[link.source][
        link.target
      ].linkType = RebuildedGraphData[link.source][
        link.target
      ].color = colorGiver(RebuildedGraphData[link.source].NodeType);
    }
    if (RebuildedGraphData[link.source][link.target].stepsToRoot) {
      RebuildedGraphData[link.target][
        link.source
      ].linkType = RebuildedGraphData[link.target][
        link.source
      ].color = colorGiver(RebuildedGraphData[link.target].NodeType);
      RebuildedGraphData[link.source][
        link.target
      ].linkType = RebuildedGraphData[link.source][
        link.target
      ].color = colorGiver(RebuildedGraphData[link.target].NodeType);
    }
  });
};

export default rebuildGraphData;
