import GraphData from '../../../data/GraphData';

const clickNodeInGraph = (nodeId, context) => {
  const svgPosition = document.getElementById(nodeId).getBoundingClientRect();
  let text;
  for (let i = 0; i < GraphData.nodes.length; i++) {
    if (GraphData.nodes[i].id === nodeId) {
      text = GraphData.nodes[i].text;
      break;
    }
  }

  if (!text) throw new Error(`text in ${nodeId} not found`);

  context.setState({
    appearEl: true,
    coords: {
      x: Math.round(svgPosition.x - 190),
      y: Math.round(svgPosition.y - 20)
    },
    innerText: text
  });
};

export default clickNodeInGraph;
