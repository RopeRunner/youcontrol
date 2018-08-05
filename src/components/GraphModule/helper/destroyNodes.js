import findShortestWay from './findShortestWay';

const destroyNodes = (rebuildedData, defaultNodeValues, nodeId) => {
  const openedNodes = [];
  const passedNodes = {};
  passedNodes[nodeId] = true;
  openedNodes.push(nodeId);
  while (openedNodes.length) {
    const curNode = openedNodes.shift();
    rebuildedData[curNode].isClosed = true;

    for (let key in rebuildedData[curNode]) {
      if (key in defaultNodeValues) continue;
      if (rebuildedData[key].isClosed) {
        rebuildedData[curNode].connectionsCounter--;
        rebuildedData[key].connectionsCounter--;
        rebuildedData[curNode][key].isAppear = false;
        rebuildedData[key][curNode].isAppear = false;
        if (!rebuildedData[key].connectionsCounter) {
          rebuildedData[key].isAppear = false;
          rebuildedData[key].currentStepsToRoot = 0;
        } else {
          findShortestWay(rebuildedData, defaultNodeValues, key, {
            [key]: true
          });
        }
      } else if (!(key in passedNodes)) {
        passedNodes[key] = true;
        openedNodes.push(key);
      }
    }

    if (!rebuildedData[curNode].connectionsCounter) {
      rebuildedData[curNode].isAppear = false;
      rebuildedData[curNode].currentStepsToRoot = 0;
    }
  }
};

export default destroyNodes;
