import moveToNewLocation from './moveToNewLocation';

const findPosition = (
  rebuildedData,
  defaultNodeValues,
  nodeId = rebuildedData.rootNode
) => {
  if (!rebuildedData[nodeId].isClosed) {
    const coords = moveToNewLocation(rebuildedData, defaultNodeValues, nodeId);
    rebuildedData[nodeId].fx = coords.x;
    rebuildedData[nodeId].fy = coords.y;
    for (let key in rebuildedData[nodeId]) {
      if (
        key in defaultNodeValues ||
        (!rebuildedData[key].fx || !rebuildedData[key].fy)
      )
        continue;

      rebuildedData[key].x = coords.x;
      rebuildedData[key].y = coords.y;
    }
  }
  //   if (nodeId === rebuildedData.rootNode) {
  //     const coords = document.getElementById(nodeId).getBoundingClientRect();
  //     rebuildedData[nodeId].x = coords.left + (coords.right - coords.left) / 2;
  //     rebuildedData[nodeId].y = coords.top + (coords.bottom - coords.top) / 2;
  //   }
  //   visitedNodes[nodeId] = true;
  //   for (let otherNode in rebuildedData[nodeId]) {
  //     if (otherNode in defaultNodeValues || otherNode in visitedNodes) return;
  //     if (rebuildedData[otherNode].isAppear) {
  //       if (!rebuildedData[otherNode].x && !rebuildedData[otherNode].y) {
  //         const coords = moveToNewLocation(
  //           rebuildedData,
  //           defaultNodeValues,
  //           nodeId
  //         );
  //         rebuildedData[otherNode].fx = rebuildedData[nodeId].x + coords.x;
  //         rebuildedData[otherNode].fy = rebuildedData[nodeId].y + coords.y;
  //       } else {
  //         const coords = document
  //           .getElementById(otherNode)
  //           .getBoundingClientRect();
  //         rebuildedData[otherNode].x =
  //           coords.left + (coords.right - coords.left) / 2;
  //         rebuildedData[otherNode].y =
  //           coords.top + (coords.bottom - coords.top) / 2;
  //         findPosition(rebuildedData, defaultNodeValues, otherNode, visitedNodes);
  //       }
  //     } else if (!rebuildedData[otherNode].isAppear) {
  //       rebuildedData[otherNode].x = rebuildedData[otherNode].y = 0;
  //     }
  //   }
};

export default findPosition;
