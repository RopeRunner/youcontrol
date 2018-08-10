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
      if (
        key in defaultNodeValues ||
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
        console.log(
          'not fixed position: ',
          key,
          rebuildedData[key].x,
          rebuildedData[key].y
        );
      } else {
        const coords = moveToNewLocation(
          rebuildedData,
          defaultNodeValues,
          key,
          nodeRadius
        );

        rebuildedData[key].fx = coords.x;
        rebuildedData[key].fy = coords.y;
        console.log('fixed position: ', key, coords.x, coords.y);
      }
    }
  }
};

export default findPosition;
