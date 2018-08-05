const hasAnotherWays = (
  rebuildedData,
  defaultNodeValues,
  nodeId,
  prevCheckedNodes = {},
  secondWays = {
    ignoreList: {}
  }
) => {
  let i = 0;
  const nodesQueue = [];
  nodesQueue.push(nodeId);
  while (nodesQueue.length) {
    if (!(nodesQueue[0] in prevCheckedNodes)) {
      nodesQueue.forEach(node => {
        prevCheckedNodes[node] = true;
      });
    }

    const curNode = nodesQueue.shift();

    for (let key in rebuildedData[curNode]) {
      if (
        key in defaultNodeValues ||
        (key in prevCheckedNodes && curNode !== prevCheckedNodes[key]) ||
        rebuildedData[key].isClosed
      )
        continue;

      if (
        rebuildedData[key].currentStepsToRoot >
        rebuildedData[curNode].currentStepsToRoot
      ) {
        nodesQueue.push(key);
      } else if (
        !secondWays[curNode] ||
        secondWays[curNode].steps > rebuildedData[key].currentStepsToRoot
      ) {
        secondWays[curNode] = {
          from: key,
          steps: rebuildedData[key].currentStepsToRoot
        };
      }

      if (
        !(
          rebuildedData[key].currentStepsToRoot >
          rebuildedData[curNode].currentStepsToRoot
        )
      ) {
        secondWays.ignoreList[key] = true;
      }
    }
    if (i++ > 20) throw new Error('lol');
  }

  return secondWays;
};

export default hasAnotherWays;
