import findShortestWay from './findShortestWay';

const calcStepsToRoot = (
  rebuildedData,
  defaultNodeValues,
  secondWays,
  ignoreList
) => {
  for (let i = 0; Object.keys(secondWays).length; i++) {
    console.log('before ' + i, secondWays, ignoreList);
    for (let nodeId in secondWays) {
      if (secondWays[nodeId].steps === i) {
        console.log(nodeId, secondWays[nodeId]);
        rebuildedData[nodeId].currentStepsToRoot = i + 1;
        ignoreList[nodeId] = true;
        delete secondWays[nodeId];
        for (let key in rebuildedData[nodeId]) {
          if (key in defaultNodeValues || key in ignoreList) continue;

          if (rebuildedData[key].isClosed) {
            findShortestWay(rebuildedData, defaultNodeValues, key, {
              ...ignoreList
            });
          } else if (
            !secondWays[key] ||
            secondWays[key].steps > rebuildedData[nodeId].currentStepsToRoot
          ) {
            secondWays[key] = {
              from: nodeId,
              steps: i + 1
            };
          }
        }
      }
    }
    console.log('after ' + i, secondWays, ignoreList);
  }
};

export default calcStepsToRoot;
