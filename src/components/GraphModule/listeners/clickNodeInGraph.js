const clickNodeInGraph = (nodeId, rebuildedData) => {
  const svgPosition = document.getElementById(nodeId).getBoundingClientRect();
  const headerText = rebuildedData[nodeId].headerText;
  const mainText = rebuildedData[nodeId].mainText;

  return {
    svgPosition,
    headerText,
    mainText
  };
};

export default clickNodeInGraph;
