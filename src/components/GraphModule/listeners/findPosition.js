import moveToNewLocation from './moveToNewLocation';

const findPosition = (
  rebuildedData,
  defaultNodeValues,
  nodeId = rebuildedData.rootNode,
  visitedNodes = {}
) => {
  if (nodeId === rebuildedData.rootNode) {
    const coords = document.getElementById(nodeId).getBoundingClientRect();

    rebuildedData[nodeId].x = coords.left + (coords.right - coords.left) / 2;
    rebuildedData[nodeId].y = coords.top + (coords.bottom - coords.top) / 2;
  }

  visitedNodes[nodeId] = true;

  for (let otherNode in rebuildedData[nodeId]) {
    if (otherNode in defaultNodeValues || otherNode in visitedNodes) return;

    if (rebuildedData[otherNode].isAppear) {
      if (!rebuildedData[otherNode].x && !rebuildedData[otherNode].y) {
        const coords = moveToNewLocation(
          rebuildedData,
          defaultNodeValues,
          nodeId
        );
        rebuildedData[otherNode].x = rebuildedData[nodeId].x + coords.x;
        rebuildedData[otherNode].y = rebuildedData[nodeId].y + coords.y;
      } else {
        const coords = document
          .getElementById(otherNode)
          .getBoundingClientRect();

        rebuildedData[otherNode].x =
          coords.left + (coords.right - coords.left) / 2;
        rebuildedData[otherNode].y =
          coords.top + (coords.bottom - coords.top) / 2;

        findPosition(rebuildedData, defaultNodeValues, otherNode, visitedNodes);
      }
    } else if (!rebuildedData[otherNode].isAppear) {
      rebuildedData[otherNode].x = rebuildedData[otherNode].y = 0;
    }
  }
};

export default findPosition;
