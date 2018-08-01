import GraphData from '../../../data/GraphData';

const clickNodeInGraph = nodeId => {
  const svgPosition = document.getElementById(nodeId).getBoundingClientRect();
  let headerText, mainText;
  for (let i = 0; i < GraphData.nodes.length; i++) {
    if (GraphData.nodes[i].id === nodeId) {
      headerText = GraphData.nodes[i].headerText;
      mainText = GraphData.nodes[i].mainText;
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
