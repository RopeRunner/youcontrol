const takeElCoords = nodeId => {
  const coords = document.getElementById(nodeId).getBoundingClientRect();
  return {
    x: coords.left + (coords.left - coords.right) / 2,
    y: coords.top + (coords.top - coords.bottom) / 2
  };
};

export default takeElCoords;
