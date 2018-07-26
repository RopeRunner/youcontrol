const openAndCloseNodes = (nodeId, rebuildedData) => {
  if (!rebuildedData[nodeId].isClosed) {
    const openedNodesStack = [];
    const nodesQueue = [];
    nodesQueue.push(nodeId);
    while (nodesQueue.length) {
      const curNode = nodesQueue.shift();
      openedNodesStack.push(curNode);
      for (let key in rebuildedData[curNode]) {
        if (key === 'isClosed' || key === 'isAppear') continue;
        if (
          !rebuildedData[curNode][key].stepsToRoot &&
          !rebuildedData[curNode][key].isClosed
        ) {
          nodesQueue.push(key);
        }
      }
    }

    while (openedNodesStack.length) {
      const curNode = openedNodesStack.pop();
      rebuildedData[curNode].isClosed = true;
      for (let key in rebuildedData[curNode]) {
        if (key === 'isClosed' || key === 'isAppear') continue;
        if (!rebuildedData[curNode][key].stepsToRoot) {
          rebuildedData[key].isAppear = false;
        }
      }
    }
  } else {
    rebuildedData[nodeId].isClosed = false;
    for (let key in rebuildedData[nodeId]) {
      if (key === 'isClosed' || key === 'isAppear') continue;
      rebuildedData[key].isAppear = true;
    }
  }
};

export default openAndCloseNodes;
