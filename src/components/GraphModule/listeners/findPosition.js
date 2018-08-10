import moveToNewLocation from './moveToNewLocation';

const findPosition = (
  rebuildedData,
  defaultNodeValues,
  nodeId = rebuildedData.rootNode,
  nodeRadius
) => {
  console.log(nodeId);
  if (!rebuildedData[nodeId].isClosed) {
    for (let key in rebuildedData[nodeId]) {
      if (key in defaultNodeValues) continue;

      console.log('personal keys: ' + key);
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
          rebuildedData[nodeId].fx || rebuildedData[nodeId].x;
        rebuildedData[key].y =
          rebuildedData[nodeId].fy || rebuildedData[nodeId].y;
        // console.log(
        //   'not fixed position: ',
        //   key,
        //   rebuildedData[key].x,
        //   rebuildedData[key].y
        // );
      } else {
        const coords = moveToNewLocation(
          rebuildedData,
          defaultNodeValues,
          key,
          nodeRadius
        );

        rebuildedData[key].fx = coords.x;
        rebuildedData[key].fy = coords.y;
        // console.log('fixed position: ', key, coords.x, coords.y);
      }
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
