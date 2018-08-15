import colorGiver from './colorGiver';

const filterData = (data, rebuildedData, defaultNodeValues, nodeTypes) => {
  const currentNodes = [];
  const currentLinks = [];
  const nodesQueue = [];
  const passedNodes = {};
  if (rebuildedData[rebuildedData.rootNode].isAppear) {
    nodesQueue.push(rebuildedData.rootNode);
    passedNodes[rebuildedData.rootNode] = {};
  }
  while (nodesQueue.length) {
    const curNode = nodesQueue.shift();
    for (let key in rebuildedData[curNode]) {
      if (
        key in defaultNodeValues ||
        !rebuildedData[key].isAppear ||
        !rebuildedData[curNode][key].isAppear ||
        passedNodes[curNode][key]
      )
        continue;

      if (!passedNodes[key]) {
        passedNodes[key] = {};
        nodesQueue.push(key);
      }
      passedNodes[curNode][key] = true;
      passedNodes[key][curNode] = true;

      currentLinks.push({
        source: curNode,
        target: key,
        color: colorGiver(rebuildedData[curNode][key].linkType, nodeTypes)
      });
    }

    const pushNode = { id: curNode, nodeName: rebuildedData[curNode].label };
    pushNode.x = rebuildedData[curNode].x;
    pushNode.y = rebuildedData[curNode].y;
    const typeOfNode = rebuildedData[curNode].parentNode
      ? rebuildedData[rebuildedData[curNode].parentNode].NodeType
      : rebuildedData[curNode].NodeType;
    if (!rebuildedData[curNode].isClosed) {
      pushNode.strokeColor = colorGiver(typeOfNode, nodeTypes);
      pushNode.color = '#ffffff';
      pushNode.highlightColor = '#ffffff';
      pushNode.strokeWidth = 4;
      if (!rebuildedData[curNode].parentNode) {
        pushNode.svg = nodeTypes[typeOfNode].open;
        pushNode.size = 2000;
      } else {
        if (!nodeTypes[typeOfNode][rebuildedData[curNode].NodeType])
          throw new Error('invalid type: ' + rebuildedData[curNode].NodeType);
        pushNode.svg =
          nodeTypes[typeOfNode][rebuildedData[curNode].NodeType].open;
      }
    } else {
      pushNode.color = colorGiver(typeOfNode, nodeTypes);
      if (!rebuildedData[curNode].parentNode) {
        pushNode.svg = nodeTypes[typeOfNode].close;
        pushNode.size = 2000;
      } else {
        if (!nodeTypes[typeOfNode][rebuildedData[curNode].NodeType])
          throw new Error(
            'invalid type: ' +
              rebuildedData[curNode].NodeType +
              ' in ' +
              curNode
          );
        pushNode.svg =
          nodeTypes[typeOfNode][rebuildedData[curNode].NodeType].close;
      }
    }

    if (rebuildedData[curNode].fx) pushNode.fx = rebuildedData[curNode].fx;
    if (rebuildedData[curNode].fy) pushNode.fy = rebuildedData[curNode].fy;

    currentNodes.push(pushNode);
  }

  return {
    nodes: currentNodes,
    links: currentLinks
  };
};

export default filterData;
