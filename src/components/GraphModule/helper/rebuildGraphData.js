const rebuildGraphData = (data, rebuildedData, defaultGraphValues) => {
  rebuildedData.rootNode = data.rootNode;
  rebuildedData.otherMainNodes = [];
  data.nodes.forEach(node => {
    rebuildedData[node.id] = {
      ...defaultGraphValues.NodeDefaultValues,
      NodeType: node.NodeType,
      parentNode: node.parentNode,
      label: node.nodeName
    };
    if (rebuildedData.rootNode !== node.id && !node.parentNode)
      rebuildedData.otherMainNodes.push(node.id);
  });

  rebuildedData[data.rootNode].isAppear = true;
  rebuildedData[data.rootNode].x = document.documentElement.clientWidth / 2;
  rebuildedData[data.rootNode].y = document.documentElement.clientHeight / 3;

  data.links.forEach(link => {
    const target1 = link.target;
    const target2 = link.source;

    rebuildedData[target1][target2] = {
      ...defaultGraphValues.LinkDefaultValues
    };
    rebuildedData[target2][target1] = {
      ...defaultGraphValues.LinkDefaultValues
    };
  });

  const NodesQueue = [];
  const passedNodes = {};
  NodesQueue.push(rebuildedData.rootNode);
  passedNodes[rebuildedData.rootNode] = true;
  while (NodesQueue.length) {
    const curNode = NodesQueue.shift();
    for (let key in rebuildedData[curNode]) {
      if (key in defaultGraphValues.NodeDefaultValues) continue;
      if (!(key in passedNodes)) {
        NodesQueue.push(key);
        passedNodes[key] = true;
      }
      if (key === rebuildedData.rootNode) {
        rebuildedData[curNode].minStepsToRoot = 1;
      } else if (
        (rebuildedData[curNode].minStepsToRoot === 0 ||
          rebuildedData[curNode].minStepsToRoot >
            rebuildedData[key].minStepsToRoot) &&
        curNode !== rebuildedData.rootNode &&
        rebuildedData[key].minStepsToRoot !== 0
      ) {
        rebuildedData[curNode].minStepsToRoot =
          rebuildedData[key].minStepsToRoot + 1;
      }
    }
  }
};

export default rebuildGraphData;
