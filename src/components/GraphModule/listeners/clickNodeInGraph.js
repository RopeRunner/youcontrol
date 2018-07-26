import GraphData from '../../../data/GraphData';

const clickNodeInGraph = nodeId => {
  const svgPosition = document.getElementById(nodeId).getBoundingClientRect();
  let text;
  for (let i = 0; i < GraphData.nodes.length; i++) {
    if (GraphData.nodes[i].id === nodeId) {
      text = GraphData.nodes[i].text;
      break;
    }
  }

  if (!text) throw new Error(`text in ${nodeId} not found`);

  return {
    svgPosition,
    text
  };
};

export default clickNodeInGraph;
