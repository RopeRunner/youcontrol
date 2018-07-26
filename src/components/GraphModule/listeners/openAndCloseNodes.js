const openAndCloseNodes = (nodeId, data) => {
  const connectedNodes = [];
  for (let i = 0; i < data.links.length; i++) {
    if (data.links[i].target === nodeId || data.links[i].source === nodeId) {
      connectedNodes.push(
        data.links[i].target === nodeId
          ? data.links[i].source
          : data.links[i].target
      );
    }
  }

  if (nodeId === data.rootNode) {
    for (let i = 0; i < data.nodes.length; i++) {
      if (data.nodes[i].id === nodeId) {
        if (data.nodes[i].isClosed) {
          data.nodes.forEach(node => {
            for (let j = 0; j < connectedNodes.length; j++) {
              if (connectedNodes[j] === node.id) {
                node.isAppear = true;
                break;
              }
            }
          });
        } else {
          data.nodes.forEach(
            node => (node.id !== nodeId ? (node.isAppear = false) : null)
          );
        }
      }
      data.nodes[i].isClosed = !data.nodes[i].isClosed;
    }
  }

  let appearNodesCounter = 0;
  data.nodes.forEach(node => (node.isAppear ? appearNodesCounter++ : null));
  return appearNodesCounter;
};

export default openAndCloseNodes;
