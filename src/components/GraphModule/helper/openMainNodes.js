import ROOT_LISTENER from '../listeners/indexListeners';

const openMainNodes = (rebuildedData, defaultNodeValues, filters) => {
  const allNodes = {};
  rebuildedData.otherMainNodes.forEach(nodeId => {
    let curNode = nodeId;
    while (rebuildedData[curNode].minStepsToRoot) {
      for (let key in rebuildedData[curNode]) {
        if (key in defaultNodeValues) continue;

        if (
          rebuildedData[curNode].minStepsToRoot >
          rebuildedData[key].minStepsToRoot
        ) {
          curNode = key;
          allNodes[key] = true;
          break;
        }
      }
    }
  });

  let i = 0;
  while (Object.keys(allNodes).length) {
    for (let key in allNodes) {
      if (rebuildedData[key].minStepsToRoot === i) {
        ROOT_LISTENER.openAndCloseNodes(
          key,
          rebuildedData,
          defaultNodeValues,
          filters
        );
        ROOT_LISTENER.findPosition(
          rebuildedData,
          defaultNodeValues,
          key,
          500,
          true
        );
        delete allNodes[key];
      }
    }
    i++;
  }
};

export default openMainNodes;