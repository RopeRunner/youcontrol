const openAndCloseNodes = (nodeId, rebuildedData) => {
  if (!rebuildedData[nodeId].isClosed) {
    const openedNodesStack = [];
    const nodesQueue = [];
    nodesQueue.push(nodeId);
    while (nodesQueue.length) {
      const curNode = nodesQueue.shift();
      openedNodesStack.push(curNode);
      for (let key in rebuildedData[curNode]) {
        if (
          key === 'isClosed' ||
          key === 'isAppear' ||
          key === 'connectionsCounter'
        )
          continue;
        if (
          !rebuildedData[curNode][key].stepsToRoot &&
          !rebuildedData[key].isClosed
        ) {
          nodesQueue.push(key);
        }
      }
    }

    while (openedNodesStack.length) {
      const curNode = openedNodesStack.pop();
      rebuildedData[curNode].isClosed = true;
      for (let key in rebuildedData[curNode]) {
        if (
          key === 'isClosed' ||
          key === 'isAppear' ||
          key === 'connectionsCounter'
        )
          continue;

        if (
          !rebuildedData[curNode][key].stepsToRoot &&
          !(rebuildedData[key].connectionsCounter - 1 < 0)
        ) {
          rebuildedData[key].isAppear = false;
          rebuildedData[key].connectionsCounter--;
          rebuildedData[curNode].connectionsCounter--;
        }
      }
    }
  } else {
    rebuildedData[nodeId].isClosed = false;
    Object.keys(rebuildedData[nodeId]).forEach(key => {
      if (
        key === 'isClosed' ||
        key === 'isAppear' ||
        key === 'connectionsCounter'
      )
        return;
      rebuildedData[key].isAppear = true;
      rebuildedData[nodeId].connectionsCounter++;
      rebuildedData[key].connectionsCounter++;
      rebuildedData[key][nodeId].isConnected = true;
      rebuildedData[nodeId][key].isConnected = true;
    });
  }
};

export default openAndCloseNodes;
