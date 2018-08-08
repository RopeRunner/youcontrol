import moveToNewLocation from './moveToNewLocation';

const findPosition = (
  rebuildedData,
  defaultNodeValues,
  nodeId = rebuildedData.rootNode,
  nodeRadius
) => {
  if (!rebuildedData[nodeId].isClosed) {
    const coords = moveToNewLocation(
      rebuildedData,
      defaultNodeValues,
      nodeId,
      nodeRadius
    );
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
};

export default findPosition;
