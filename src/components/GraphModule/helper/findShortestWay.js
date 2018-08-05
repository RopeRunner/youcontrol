const findShortestWay = (
  rebuildedData,
  defaultNodeValues,
  nodeId,
  prevUpdatedNodes
) => {
  let curMinWay = 0;
  for (let key in rebuildedData[nodeId]) {
    if (key in defaultNodeValues || rebuildedData[key].isClosed) continue;
    if (curMinWay === 0 || curMinWay > rebuildedData[key].currentStepsToRoot) {
      curMinWay = rebuildedData[key].currentStepsToRoot;
    }
    if (key === rebuildedData.rootNode) break;
  }

  if (
    !rebuildedData[nodeId].currentStepsToRoot &&
    nodeId !== rebuildedData.rootNode
  ) {
    rebuildedData[nodeId].currentStepsToRoot = curMinWay + 1;
  } else if (
    curMinWay !== rebuildedData[nodeId].currentStepsToRoot - 1 &&
    nodeId !== rebuildedData.rootNode
  ) {
    rebuildedData[nodeId].currentStepsToRoot = curMinWay + 1;
    for (let key in rebuildedData[nodeId]) {
      if (
        key in defaultNodeValues ||
        key in prevUpdatedNodes ||
        !rebuildedData[nodeId][key].isAppear
      )
        continue;
      prevUpdatedNodes[key] = true;
      findShortestWay(rebuildedData, defaultNodeValues, key, prevUpdatedNodes);
    }
  }
};

export default findShortestWay;
