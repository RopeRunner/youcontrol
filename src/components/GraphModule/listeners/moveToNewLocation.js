const moveToNewLocation = (rebuildedData, defaultNodeValues, nodeId) => {
  const coords = { x: 0, y: 0 };
  const allCoords = {};
  for (let key in rebuildedData[nodeId]) {
    if (key in defaultNodeValues) continue;
    console.log(rebuildedData[key].x, rebuildedData.y);
  }

  return coords;
};

export default moveToNewLocation;
