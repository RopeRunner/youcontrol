const moveToNewLocation = (rebuildedData, defaultNodeValues, nodeId) => {
  let coords = {
    x: rebuildedData[rebuildedData.rootNode].fx,
    y: rebuildedData[rebuildedData.rootNode].fy
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
        !(rebuildedData[key].fx && rebuildedData[key].fy)
      )
        continue;

      passedNodes[key] = true;
      nodesQueue.push(key);
    }

    if (!nodesCube.left || nodesCube.left > rebuildedData[curNode].fx)
      nodesCube.left = rebuildedData[curNode].fx;
    if (!nodesCube.right || nodesCube.right < rebuildedData[curNode].fx)
      nodesCube.right = rebuildedData[curNode].fx;
    if (!nodesCube.top || nodesCube.top > rebuildedData[curNode].fy)
      nodesCube.top = rebuildedData[curNode].fy;
    if (!nodesCube.bottom || nodesCube.bottom < rebuildedData[curNode].fy)
      nodesCube.bottom = rebuildedData[curNode].fy;
  }

  const rootCube = {};
  for (let key in rebuildedData[nodeId]) {
    if (key in defaultNodeValues || rebuildedData[key].isClosed) continue;

    if (!rootCube.left || rootCube.left > rebuildedData[key].fx)
      rootCube.left = rebuildedData[key].fx;
    if (!rootCube.right || rootCube.right < rebuildedData[key].fx)
      rootCube.right = rebuildedData[key].fx;
    if (!rootCube.top || rootCube.top > rebuildedData[key].fy)
      rootCube.top = rebuildedData[key].fy;
    if (!rootCube.bottom || rootCube.bottom < rebuildedData[key].fy)
      rootCube.bottom = rebuildedData[key].fy;
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

  console.log(rootCenter, cubeCenter);

  // const findThirdCoord = (A, B) => {
  //   return C => {
  //     if ('x' in C) {
  //       return { x: C.x, y: ((C.x - B.x) * (A.y - B.y)) / (A.x - B.x) + B.y };
  //     } else {
  //       return { x: ((C.y - B.y) * (A.x - B.x)) / (A.y - B.y) + B.x, y: C.y };
  //     }
  //   };
  // };

  // const thirdCoord = findThirdCoord(cubeCenter, rootCenter);

  // let C = { x: rootCenter.x > cubeCenter.x ? nodesCube.right : nodesCube.left };
  // C = thirdCoord(C);

  let numberOfNodes = 0;
  for (let key in rebuildedData[nodeId]) {
    if (
      key in defaultNodeValues ||
      (rebuildedData[key].fx && rebuildedData[key].fy)
    )
      continue;
    numberOfNodes++;
  }

  const radius = numberOfNodes > 6 ? 250 * Math.sqrt(numberOfNodes) : 250;

  // if (rootCenter.y < cubeCenter.y) {
  //   if (C.y > nodesCube.top) {
  //     coords = thirdCoord({
  //       x:
  //         rootCenter.x > cubeCenter.x
  //           ? nodesCube.right + radius
  //           : nodesCube.left - radius
  //     });
  //   } else {
  //     coords = thirdCoord({ y: nodesCube.top - radius });
  //   }
  // } else {
  //   if (C.y < nodesCube.bottom) {
  //     coords = thirdCoord({
  //       x:
  //         rootCenter.x > cubeCenter.x
  //           ? nodesCube.right + radius
  //           : nodesCube.left - radius
  //     });
  //   } else {
  //     coords = thirdCoord({ y: nodesCube.bottom + radius });
  //   }
  // }

  if (rootCenter.x > cubeCenter.x) {
    if (rootCenter.y > rootCenter.y) {
      if (nodesCube.right - rootCenter.x > nodesCube.bottom - rootCenter.y) {
        coords = { x: rootCenter.x, y: nodesCube.bottom + radius };
      } else {
        coords = { x: nodesCube.right + radius, y: rootCenter.y };
      }
    } else {
      if (nodesCube.right - rootCenter.x > rootCenter.y - nodesCube.top) {
        coords = { x: rootCenter.x, y: nodesCube.top - radius };
      } else {
        coords = { x: nodesCube.right + radius, y: rootCenter.y };
      }
    }
  } else {
    if (rootCenter.y > rootCenter.y) {
      if (rootCenter.x - nodesCube.left > nodesCube.bottom - rootCenter.y) {
        coords = { x: rootCenter.x, y: nodesCube.bottom + radius };
      } else {
        coords = { x: nodesCube.left - radius, y: rootCenter.y };
      }
    } else {
      if (rootCenter.x - nodesCube.left > rootCenter.y - nodesCube.top) {
        coords = { x: rootCenter.x, y: nodesCube.top - radius };
      } else {
        coords = { x: nodesCube.left - radius, y: rootCenter.y };
      }
    }
  }

  return coords;
};

export default moveToNewLocation;
