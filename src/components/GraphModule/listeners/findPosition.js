const findPosition = (rebuildedData, nodeId) => {
  const node = nodeId ? nodeId : rebuildedData.rootNode;
  if (!nodeId) {
    const coords = document.getElementById(node).getBoundingClientRect();

    rebuildedData[node].x = coords.left + (coords.right - coords.left) / 2;
    rebuildedData[node].y = coords.top + (coords.bottom - coords.top) / 2;
  }

  Object.keys(rebuildedData[node]).forEach(otherNode => {
    if (
      otherNode === 'isClosed' ||
      otherNode === 'isAppear' ||
      otherNode === 'x' ||
      otherNode === 'y' ||
      otherNode === 'NodeType'
    )
      return;

    if (
      rebuildedData[otherNode].isAppear &&
      !rebuildedData[node][otherNode].stepsToRoot
    ) {
      if (!rebuildedData[otherNode].x && !rebuildedData[otherNode].y) {
        const coords = { x: 0, y: 0 };
        Object.keys(rebuildedData[node]).forEach(key => {
          if (
            otherNode === 'isClosed' ||
            otherNode === 'isAppear' ||
            otherNode === 'x' ||
            otherNode === 'y' ||
            otherNode === 'NodeType' ||
            coords.x ||
            coords.y ||
            !rebuildedData[node][key].stepsToRoot
          )
            return;
          console.log(key);
          coords.x = rebuildedData[node].x - rebuildedData[key].x;
          coords.y = rebuildedData[node].y - rebuildedData[key].y;
        });
        console.log(coords);
        rebuildedData[otherNode].x = rebuildedData[node].x + coords.x / 2;
        rebuildedData[otherNode].y = rebuildedData[node].y + coords.y / 2;
      } else {
        const coords = document
          .getElementById(otherNode)
          .getBoundingClientRect();

        rebuildedData[otherNode].x =
          coords.left + (coords.right - coords.left) / 2;
        rebuildedData[otherNode].y =
          coords.top + (coords.bottom - coords.top) / 2;

        findPosition(rebuildedData, otherNode);
      }
    } else if (!rebuildedData[otherNode].isAppear) {
      rebuildedData[otherNode].x = rebuildedData[otherNode].y = 0;
    }
  });
};

export default findPosition;
