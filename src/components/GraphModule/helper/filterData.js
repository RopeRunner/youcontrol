const filterData = (data, rebuildedData) => {
  const currentNodes = [];
  data.nodes.forEach(node => {
    if (rebuildedData[node.id].isAppear) {
      const pushNode = { ...node };
      pushNode.x = rebuildedData[node.id].x;
      pushNode.y = rebuildedData[node.id].y;
      if (!rebuildedData[node.id].isClosed) {
        pushNode.color = '#ffffff';
        pushNode.strokeColor = '#11a7f3';
        pushNode.strokeWidth = 4;
        pushNode.svg = pushNode.svg.open;
      } else {
        pushNode.svg = pushNode.svg.close;
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
