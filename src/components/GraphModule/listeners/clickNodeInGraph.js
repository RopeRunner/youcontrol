const clickNodeInGraph = (nodeId, data) => {
  const svgPosition = document.getElementById(nodeId).getBoundingClientRect();
  let headerText, mainText;
  for (let i = 0; i < data.nodes.length; i++) {
    if (data.nodes[i].id === nodeId) {
      headerText = data.nodes[i].headerText;
      mainText = data.nodes[i].mainText;
      break;
    }
  }

  if (!headerText) throw new Error(`text in ${nodeId} not found`);

  return {
    svgPosition,
    headerText,
    mainText
  };
};

export default clickNodeInGraph;
