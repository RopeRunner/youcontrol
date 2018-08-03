import colorGiver from './colorGiver';

const filterData = (data, rebuildedData, nodeTypes) => {
  const currentNodes = [];
  data.nodes.forEach(node => {
    if (rebuildedData[node.id].isAppear) {
      const pushNode = { id: node.id, nodeName: node.nodeName };
      pushNode.x = rebuildedData[node.id].x;
      pushNode.y = rebuildedData[node.id].y;
      if (!rebuildedData[node.id].isClosed) {
        pushNode.strokeColor = colorGiver(rebuildedData[node.id].NodeType);
        pushNode.color = '#ffffff';
        pushNode.highlightColor = '#ffffff';
        pushNode.strokeWidth = 4;
        const type = node.NodeType;
        if (type in nodeTypes) {
          pushNode.svg = nodeTypes[type].open;
          pushNode.size = 2000;
        } else {
          pushNode.svg = nodeTypes[rebuildedData[node.id].NodeType][type].open;
        }
      } else {
        pushNode.color = colorGiver(rebuildedData[node.id].NodeType);

        const type = node.NodeType;
        if (type in nodeTypes) {
          pushNode.svg = nodeTypes[type].close;
          pushNode.size = 2000;
        } else {
          if (!nodeTypes[rebuildedData[node.id].NodeType][type])
            throw new Error('invalid type: ' + type);
          pushNode.svg = nodeTypes[rebuildedData[node.id].NodeType][type].close;
        }
      }

      if (rebuildedData[node.id].fx) pushNode.fx = rebuildedData[node.id].fx;
      if (rebuildedData[node.id].fy) pushNode.fy = rebuildedData[node.id].fy;

      currentNodes.push(pushNode);
    }
  });

  const currentLinks = [];
  data.links.forEach(link => {
    const isTarget1 = rebuildedData[link.target].isAppear;
    const isTarget2 = rebuildedData[link.source].isAppear;

    if (isTarget1 && isTarget2) {
      currentLinks.push({
        ...link,
        color: rebuildedData[link.target][link.source].color
      });
    }
  });

  return {
    nodes: currentNodes,
    links: currentLinks
  };
};

export default filterData;
