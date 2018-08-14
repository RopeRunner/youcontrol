import findShortestWay from '../helper/findShortestWay';
import hasAnotherWays from '../helper/hasAnotherWays';
import calcStepsToRoot from '../helper/calcStepsToRoot';
import destroyNodes from '../helper/destroyNodes';

const openAndCloseNodes = (
  nodeId,
  rebuildedData,
  defaultNodeValues,
  filters
) => {
  if (rebuildedData[nodeId].isClosed) {
    rebuildedData[nodeId].isClosed = false;
    for (let key in rebuildedData[nodeId]) {
      if (
        key in defaultNodeValues ||
        !filters[rebuildedData[key].NodeType].isActive ||
        (rebuildedData[key].parentNode &&
          !filters[rebuildedData[rebuildedData[key].parentNode].NodeType]
            .isActive)
      )
        continue;

      if (!rebuildedData[nodeId][key].isAppear) {
        rebuildedData[nodeId].connectionsCounter++;
        rebuildedData[key].connectionsCounter++;
        const typeOfNode = rebuildedData[nodeId].parentNode
          ? rebuildedData[rebuildedData[nodeId].parentNode].NodeType
          : rebuildedData[nodeId].NodeType;
        rebuildedData[nodeId][key].linkType = typeOfNode;
        rebuildedData[key][nodeId].linkType = typeOfNode;
        rebuildedData[nodeId][key].isAppear = true;
        rebuildedData[key][nodeId].isAppear = true;
        rebuildedData[key].isAppear = true;
      }
    }

    const prevUpdatedNodes = {};
    prevUpdatedNodes[nodeId] = true;
    for (let key in rebuildedData[nodeId]) {
      if (key in defaultNodeValues) continue;
      prevUpdatedNodes[key] = true;
      findShortestWay(rebuildedData, defaultNodeValues, key, prevUpdatedNodes);
    }
  } else {
    if (nodeId === rebuildedData.rootNode) {
      for (let key in rebuildedData[nodeId]) {
        if (
          key in defaultNodeValues ||
          !filters[rebuildedData[key].NodeType].isActive ||
          (rebuildedData[key].parentNode &&
            !filters[rebuildedData[rebuildedData[key].parentNode].NodeType]
              .isActive)
        )
          continue;

        if (!rebuildedData[key].isClosed)
          openAndCloseNodes(key, rebuildedData, defaultNodeValues, filters);

        rebuildedData[nodeId].connectionsCounter--;
        rebuildedData[key].connectionsCounter--;
        rebuildedData[nodeId][key].isAppear = false;
        rebuildedData[key][nodeId].isAppear = false;
        rebuildedData[nodeId][key].linkType = null;
        rebuildedData[key][nodeId].linkType = null;
        if (!rebuildedData[key].connectionsCounter) {
          rebuildedData[key].isAppear = false;
          rebuildedData[key].currentStepsToRoot = 0;
          rebuildedData[key].x = 0;
          rebuildedData[key].y = 0;
          rebuildedData[key].fx = null;
          rebuildedData[key].fy = null;
        }
      }

      rebuildedData[nodeId].isClosed = true;

      return;
    }

    rebuildedData[nodeId].isClosed = true;

    for (let key in rebuildedData[nodeId]) {
      if (
        key in defaultNodeValues ||
        !filters[rebuildedData[key].NodeType].isActive ||
        (rebuildedData[key].parentNode &&
          !filters[rebuildedData[rebuildedData[key].parentNode].NodeType]
            .isActive)
      )
        continue;

      if (rebuildedData[key].isClosed) {
        rebuildedData[nodeId].connectionsCounter--;
        rebuildedData[key].connectionsCounter--;
        rebuildedData[nodeId][key].isAppear = false;
        rebuildedData[key][nodeId].isAppear = false;
        rebuildedData[nodeId][key].linkType = null;
        rebuildedData[key][nodeId].linkType = null;
        if (!rebuildedData[key].connectionsCounter) {
          rebuildedData[key].isAppear = false;
          rebuildedData[key].currentStepsToRoot = 0;
          rebuildedData[key].x = 0;
          rebuildedData[key].y = 0;
          rebuildedData[key].fx = null;
          rebuildedData[key].fy = null;
        }
      } else if (
        rebuildedData[key].currentStepsToRoot >
        rebuildedData[nodeId].currentStepsToRoot
      ) {
        const { ignoreList, ...secondWayNodes } = hasAnotherWays(
          rebuildedData,
          defaultNodeValues,
          key,
          { [key]: true }
        );

        if (Object.keys(secondWayNodes).length) {
          calcStepsToRoot(
            rebuildedData,
            defaultNodeValues,
            secondWayNodes,
            ignoreList
          );
        } else {
          destroyNodes(rebuildedData, defaultNodeValues, filters, key);
        }
      }
    }
  }
};

export default openAndCloseNodes;
