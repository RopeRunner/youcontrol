const moveToNewLocation = (
  rebuildedData,
  defaultNodeValues,
  nodeId,
  nodeRadius
) => {
  let coords = {
    x:
      rebuildedData[rebuildedData.rootNode].fx ||
      rebuildedData[rebuildedData.rootNode].x,
    y:
      rebuildedData[rebuildedData.rootNode].fy ||
      rebuildedData[rebuildedData.rootNode].y
  };

  const nodesCube = {};
  const nodesQueue = [];
  const passedNodes = {};
  nodesQueue.push(rebuildedData.rootNode);
  passedNodes[rebuildedData.rootNode] = true;
  while (nodesQueue.length) {
    const curNode = nodesQueue.shift();
    for (let key in rebuildedData[curNode]) {
      if (
        key in defaultNodeValues ||
        key in passedNodes ||
        !(
          (rebuildedData[key].fx && rebuildedData[key].fy) ||
          (rebuildedData[key].x && rebuildedData[key].y)
        )
      )
        continue;

      passedNodes[key] = true;
      nodesQueue.push(key);
    }

    const curNodeCoord = {
      x: rebuildedData[curNode].fx || rebuildedData[curNode].x,
      y: rebuildedData[curNode].fy || rebuildedData[curNode].y
    };

    if (!nodesCube.left || nodesCube.left > curNodeCoord.x)
      nodesCube.left = curNodeCoord.x;
    if (!nodesCube.right || nodesCube.right < curNodeCoord.x)
      nodesCube.right = curNodeCoord.x;
    if (!nodesCube.top || nodesCube.top > curNodeCoord.y)
      nodesCube.top = curNodeCoord.y;
    if (!nodesCube.bottom || nodesCube.bottom < curNodeCoord.y)
      nodesCube.bottom = curNodeCoord.y;
  }

  const rootCube = {};
  for (let key in rebuildedData[nodeId]) {
    if (
      key in defaultNodeValues ||
      rebuildedData[key].isClosed ||
      !(
        (rebuildedData[key].fx && rebuildedData[key].fy) ||
        (rebuildedData[key].x && rebuildedData[key].y)
      )
    )
      continue;

    const curNodeCoord = {
      x: rebuildedData[key].fx || rebuildedData[key].x,
      y: rebuildedData[key].fy || rebuildedData[key].y
    };

    if (!rootCube.left || rootCube.left > curNodeCoord.x)
      rootCube.left = curNodeCoord.x;
    if (!rootCube.right || rootCube.right < curNodeCoord.x)
      rootCube.right = curNodeCoord.x;
    if (!rootCube.top || rootCube.top > curNodeCoord.y)
      rootCube.top = curNodeCoord.y;
    if (!rootCube.bottom || rootCube.bottom < curNodeCoord.y)
      rootCube.bottom = curNodeCoord.y;
  }

  if (nodeId === rebuildedData.rootNode) return coords;

  let rootCenter = {
    x: rootCube.left + (rootCube.right - rootCube.left) / 2,
    y: rootCube.top + (rootCube.bottom - rootCube.top) / 2
  };

  const cubeCenter = {
    x: nodesCube.left + (nodesCube.right - nodesCube.left) / 2,
    y: nodesCube.top + (nodesCube.bottom - nodesCube.top) / 2
  };

  const swapX = cubeCenter.x - rootCenter.x;
  const swapY = cubeCenter.y - rootCenter.y;
  rootCenter.x = cubeCenter.x + (Math.round(Math.random()) ? -swapY : swapY);
  rootCenter.y = cubeCenter.y + (Math.round(Math.random()) ? -swapX : swapX);

  const findThirdCoord = (A, B) => {
    return C => {
      if ('x' in C) {
        return {
          x: C.x,
          y: isNaN(((C.x - B.x) * (A.y - B.y)) / (A.x - B.x))
            ? B.y
            : ((C.x - B.x) * (A.y - B.y)) / (A.x - B.x) + B.y
        };
      } else {
        return {
          x: isNaN(((C.y - B.y) * (A.x - B.x)) / (A.y - B.y))
            ? B.x
            : ((C.y - B.y) * (A.x - B.x)) / (A.y - B.y) + B.x,
          y: C.y
        };
      }
    };
  };

  const thirdCoord = findThirdCoord(cubeCenter, rootCenter);

  let C = { x: rootCenter.x > cubeCenter.x ? nodesCube.right : nodesCube.left };
  C = thirdCoord(C);

  let numberOfNodes = 0;
  for (let key in rebuildedData[nodeId]) {
    if (
      key in defaultNodeValues ||
      (rebuildedData[key].fx && rebuildedData[key].fy)
    )
      continue;
    numberOfNodes++;
  }

  const radius =
    numberOfNodes > 6 ? nodeRadius * Math.sqrt(numberOfNodes) : nodeRadius;

  if (rootCenter.y < cubeCenter.y) {
    if (C.y > nodesCube.top) {
      coords = thirdCoord({
        x:
          rootCenter.x > cubeCenter.x
            ? nodesCube.right + radius
            : nodesCube.left - radius
      });
    } else {
      coords = thirdCoord({ y: nodesCube.top - radius });
    }
  } else {
    if (C.y < nodesCube.bottom) {
      coords = thirdCoord({
        x:
          rootCenter.x > cubeCenter.x
            ? nodesCube.right + radius
            : nodesCube.left - radius
      });
    } else {
      coords = thirdCoord({ y: nodesCube.bottom + radius });
    }
  }

  return coords;
};

export default moveToNewLocation;
