const filterData = (data, rebuildedData) => {
  const currentNodes = [];
  data.nodes.forEach(node => {
    if (rebuildedData[node.id].isAppear) {
      const pushNode = { id: node.id };
      if (!rebuildedData[node.id].isClosed) {
        pushNode.color = '#ffffff';
        pushNode.strokeColor = 'rgb(50, 250, 50)';
        pushNode.strokeWidth = 4;
      }
      currentNodes.push(pushNode);
    }
  });

  const currentLinks = [];
  data.links.forEach(link => {
    const isTarget1 = rebuildedData[link.target].isAppear;
    const isTarget2 = rebuildedData[link.source].isAppear;

    if (isTarget1 && isTarget2) {
      currentLinks.push({
        ...link
      });
    }
  });

  return {
    nodes: currentNodes,
    links: currentLinks
  };
};

export default filterData;
