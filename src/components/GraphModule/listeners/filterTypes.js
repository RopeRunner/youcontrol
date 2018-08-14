import openAndCloseNodes from './openAndCloseNodes';
import findPosition from './findPosition';

const filterLinks = (
  filters,
  filter,
  rebuildedData,
  defaultNodeValues,
  nodeTypes
) => {
  if (filters[filter].isActive) {
    let maxStepsToRoot = 0;
    const filteredNodes = [];
    const passedNodes = {};
    const NodesQueue = [];
    NodesQueue.push(rebuildedData.rootNode);
    passedNodes[rebuildedData.rootNode] = true;
    while (NodesQueue.length) {
      const curNode = NodesQueue.shift();
      for (let key in rebuildedData[curNode]) {
        if (
          key in defaultNodeValues ||
          key in passedNodes ||
          !rebuildedData[curNode][key].isAppear
        )
          continue;

        passedNodes[key] = true;
        NodesQueue.push(key);
      }

      if (filter in nodeTypes) {
        if (
          filter === rebuildedData[curNode].NodeType ||
          (rebuildedData[curNode].parentNode &&
            rebuildedData[rebuildedData[curNode].parentNode].NodeType ===
              filter)
        ) {
          if (rebuildedData[curNode].currentStepsToRoot > maxStepsToRoot)
            maxStepsToRoot = rebuildedData[curNode].currentStepsToRoot;
          filteredNodes.push(curNode);
        }
      } else {
        if (filter === rebuildedData[curNode].NodeType) {
          if (rebuildedData[curNode].currentStepsToRoot > maxStepsToRoot)
            maxStepsToRoot = rebuildedData[curNode].currentStepsToRoot;
          filteredNodes.push(curNode);
        }
      }
    }

    for (let i = maxStepsToRoot; i > -2; i--) {
      for (let j = 0; j < filteredNodes.length; j++) {
        console.log(filteredNodes, i);
        if (
          rebuildedData[filteredNodes[j]].currentStepsToRoot === i &&
          !rebuildedData[filteredNodes[j]].isClosed
        ) {
          console.log(filteredNodes[j]);
          openAndCloseNodes(
            filteredNodes[j],
            rebuildedData,
            defaultNodeValues,
            filters
          );
        } else if (
          rebuildedData[filteredNodes[j]].currentStepsToRoot ===
          i + 2
        ) {
          console.log(filteredNodes[j]);
          if (rebuildedData[filteredNodes[j]].connectionsCounter) {
            for (let key in rebuildedData[filteredNodes[j]]) {
              if (key in defaultNodeValues || rebuildedData[key].isClosed)
                continue;

              rebuildedData[filteredNodes[j]][key].connectionsCounter--;
              rebuildedData[key][filteredNodes[j]].connectionsCounter--;
              rebuildedData[filteredNodes[j]][key].isAppear = false;
              rebuildedData[key][filteredNodes[j]].isAppear = false;
              rebuildedData[filteredNodes[j]][key].linkType = null;
              rebuildedData[key][filteredNodes[j]].linkType = null;
            }

            rebuildedData[filteredNodes[j]].isAppear = false;
            rebuildedData[filteredNodes[j]].x = 0;
            rebuildedData[filteredNodes[j]].y = 0;
            rebuildedData[filteredNodes[j]].fx = null;
            rebuildedData[filteredNodes[j]].fy = null;
          }
        }

        if (!rebuildedData[filteredNodes[j]].isAppear) {
          filteredNodes.splice(j--, 1);
        }
      }
    }
  } else {
    const passedNodes = {};
    const NodesQueue = [];
    NodesQueue.push(rebuildedData.rootNode);
    passedNodes[rebuildedData.rootNode] = true;
    while (NodesQueue.length) {
      const curNode = NodesQueue.shift();
      const openFilteredNodes = [];
      for (let key in rebuildedData[curNode]) {
        if (key in defaultNodeValues || key in passedNodes) continue;

        if (filter in nodeTypes) {
          if (
            filter === rebuildedData[key].NodeType ||
            (rebuildedData[key].parentNode &&
              rebuildedData[rebuildedData[key].parentNode].NodeType === filter)
          ) {
            openFilteredNodes.push(key);
            continue;
          }
        } else {
          if (filter === rebuildedData[key].NodeType) {
            openFilteredNodes.push(key);
            continue;
          }
        }
        if (!rebuildedData[key].isClosed) {
          passedNodes[key] = true;
          NodesQueue.push(key);
        }
      }

      const typeOfNode = rebuildedData[curNode].parentNode
        ? rebuildedData[rebuildedData[curNode].parentNode].NodeType
        : rebuildedData[curNode].NodeType;

      openFilteredNodes.forEach(nodeId => {
        rebuildedData[curNode][nodeId].connectionsCounter++;
        rebuildedData[nodeId][curNode].connectionsCounter++;
        rebuildedData[curNode][nodeId].isAppear = true;
        rebuildedData[nodeId][curNode].isAppear = true;
        rebuildedData[curNode][nodeId].linkType = typeOfNode;
        rebuildedData[nodeId][curNode].linkType = typeOfNode;
        rebuildedData[nodeId].isAppear = true;
      });

      findPosition(rebuildedData, defaultNodeValues, curNode, 500, false);
    }
  }
};

export default filterLinks;
