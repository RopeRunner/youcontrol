import moveToNewLocation from './moveToNewLocation';

const findPosition = (
  rebuildedData,
  defaultNodeValues,
  nodeId = rebuildedData.rootNode,
  nodeRadius,
  isFirstRender
) => {
  if (!rebuildedData[nodeId].isClosed) {
    const newPosition = [];
    const connectedNodes = [];
    for (let key in rebuildedData[nodeId]) {
      if (key in defaultNodeValues || !rebuildedData[key].isAppear) continue;

      if (
        rebuildedData[key].parentNode &&
        rebuildedData[key].fx &&
        rebuildedData[key].fy
      ) {
        const parentId = rebuildedData[key].parentNode;
        const coords = {
          x: rebuildedData[parentId].fx || rebuildedData[parentId].x,
          y: rebuildedData[parentId].fy || rebuildedData[parentId].y
        };

        if (
          coords.x &&
          coords.y &&
          (Math.abs(coords.x - rebuildedData[key].fx) > 300 ||
            Math.abs(coords.y - rebuildedData[key].fy) > 300)
        ) {
          rebuildedData[key].fx = null;
          rebuildedData[key].fy = null;
        }

        continue;
      }

      if (
        (rebuildedData[key].fx && rebuildedData[key].fy) ||
        (rebuildedData[key].x && rebuildedData[key].y)
      )
        continue;

      if (!rebuildedData[key].parentNode) {
        const openNodes = [];
        for (let anotherKey in rebuildedData[nodeId]) {
          if (
            anotherKey in defaultNodeValues ||
            anotherKey === key ||
            rebuildedData[anotherKey].isClosed
          )
            continue;

          const xWay =
            (rebuildedData[nodeId].fx || rebuildedData[nodeId].x) -
            (rebuildedData[anotherKey].fx || rebuildedData[anotherKey].x);
          const yWay = -(
            (rebuildedData[nodeId].fy || rebuildedData[nodeId].y) -
            (rebuildedData[anotherKey].fy || rebuildedData[anotherKey].y)
          );

          const d2 = Math.sqrt(xWay * xWay + yWay * yWay);

          openNodes.push({
            kx: xWay / d2,
            ky: yWay / d2
          });
        }

        const stepKX =
          openNodes.reduce((sum, coord) => sum + coord.kx, 0) /
          openNodes.length;
        const stepKY =
          openNodes.reduce((sum, coord) => sum + coord.ky, 0) /
          openNodes.length;

        rebuildedData[key].x =
          (rebuildedData[nodeId].fx || rebuildedData[nodeId].x) + 100 * stepKX;
        rebuildedData[key].y =
          (rebuildedData[nodeId].fy || rebuildedData[nodeId].y) - 100 * stepKY;

        continue;
      } else if (nodeId === rebuildedData[key].parentNode) {
        connectedNodes.push(key);
      } else if (
        rebuildedData[nodeId].parentNode === rebuildedData[key].parentNode
      ) {
        rebuildedData[key].x =
          (rebuildedData[nodeId].fx || rebuildedData[nodeId].x) +
          (Math.random() - 0.5) * 20;
        rebuildedData[key].y =
          (rebuildedData[nodeId].fy || rebuildedData[nodeId].y) +
          (Math.random() - 0.5) * 20;
      } else newPosition.push(key);
    }

    if (connectedNodes.length) {
      const step = (Math.PI * 2) / connectedNodes.length;
      const radian = Math.random();
      for (let i = 0; i < connectedNodes.length; i++) {
        if (isFirstRender) {
          rebuildedData[connectedNodes[i]].fx =
            (rebuildedData[nodeId].fx || rebuildedData[nodeId].x) +
            100 * Math.cos(step * i + radian);
          rebuildedData[connectedNodes[i]].fy =
            (rebuildedData[nodeId].fy || rebuildedData[nodeId].y) -
            100 * Math.sin(step * i + radian);
        } else {
          rebuildedData[connectedNodes[i]].x =
            (rebuildedData[nodeId].fx || rebuildedData[nodeId].x) +
            100 * Math.cos(step * i + radian);
          rebuildedData[connectedNodes[i]].y =
            (rebuildedData[nodeId].fy || rebuildedData[nodeId].y) -
            100 * Math.sin(step * i + radian);
        }
      }
    }

    if (newPosition.length) {
      const coords = moveToNewLocation(
        rebuildedData,
        defaultNodeValues,
        nodeId,
        nodeRadius,
        newPosition.length
      );

      newPosition.forEach((appearNode, index) => {
        rebuildedData[appearNode].fx = coords[index].x;
        rebuildedData[appearNode].fy = coords[index].y;
      });
    }

    if (
      rebuildedData[nodeId].parentNode &&
      rebuildedData[nodeId].fx &&
      rebuildedData[nodeId].fy
    ) {
      const parentId = rebuildedData[nodeId].parentNode;
      const coords = {
        x: rebuildedData[parentId].fx || rebuildedData[parentId].x,
        y: rebuildedData[parentId].fy || rebuildedData[parentId].y
      };

      if (
        coords.x &&
        coords.y &&
        (Math.abs(coords.x - rebuildedData[nodeId].fx) > 300 ||
          Math.abs(coords.y - rebuildedData[nodeId].fy) > 300)
      ) {
        rebuildedData[nodeId].fx = null;
        rebuildedData[nodeId].fy = null;
      }
    }
  }
};

export default findPosition;
