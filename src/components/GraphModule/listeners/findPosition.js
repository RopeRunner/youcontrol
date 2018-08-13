import moveToNewLocation from './moveToNewLocation';

const findPosition = (
  rebuildedData,
  defaultNodeValues,
  nodeId = rebuildedData.rootNode,
  nodeRadius
) => {
  if (!rebuildedData[nodeId].isClosed) {
    const newPosition = [];
    for (let key in rebuildedData[nodeId]) {
      if (key in defaultNodeValues) continue;

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

      if (
        rebuildedData[nodeId].parentNode === key ||
        rebuildedData[nodeId].parentNode === rebuildedData[key].parentNode ||
        nodeId === rebuildedData[key].parentNode
      ) {
        rebuildedData[key].x =
          (rebuildedData[nodeId].fx || rebuildedData[nodeId].x) +
          (Math.random() - 0.5) * 20;
        rebuildedData[key].y =
          (rebuildedData[nodeId].fy || rebuildedData[nodeId].y) +
          (Math.random() - 0.5) * 20;
      } else newPosition.push(key);
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
