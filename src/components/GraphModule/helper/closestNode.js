const closestNode = (rebuildedData, defaultNodeValues, x, y, radius) => {
  const openNodes = [];
  const passedNodes = {};
  const nodesInRadius = {};
  openNodes.push(rebuildedData.rootNode);
  while (openNodes.length) {
    const curNode = openNodes.shift();
    passedNodes[curNode] = true;

    for (let key in rebuildedData[curNode]) {
      if (key in defaultNodeValues || key in passedNodes) continue;

      if (
        rebuildedData[key].isAppear &&
        ((rebuildedData[key].fx && rebuildedData[key].fy) ||
          (rebuildedData[key].x && rebuildedData[key].y))
      ) {
        openNodes.push(key);
      }
    }

    const coords = {
      x: rebuildedData[curNode].fx || rebuildedData[curNode].x,
      y: rebuildedData[curNode].fy || rebuildedData[curNode].y
    };

    const dx = x - coords.x;
    const dy = y - coords.y;
    const d2 = Math.sqrt(dx * dx + dy * dy);
    if (d2 < radius && d2 !== 0) nodesInRadius[curNode] = d2;
  }

  if (Object.keys(nodesInRadius).length) return nodesInRadius;
  else return null;
};

export default closestNode;
