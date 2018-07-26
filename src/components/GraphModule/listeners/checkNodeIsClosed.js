const checkNodeIsClosed = (nodeId, nodes) => {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === nodeId) return nodes[i].isClosed;
  }
  throw new Error(`node id ${nodeId} not found`);
};

export default checkNodeIsClosed;
