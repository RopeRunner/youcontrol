import colorGiver from './colorGiver';

const filterData = (data, rebuildedData, nodeTypes) => {
  const currentNodes = [];
  data.nodes.forEach(node => {
    if (rebuildedData[node.id].isAppear) {
      const pushNode = { id: node.id, nodeName: node.nodeName };
      pushNode.x = rebuildedData[node.id].x;
      pushNode.y = rebuildedData[node.id].y;
      const typeOfNode = node.parentNode
        ? rebuildedData[node.parentNode].NodeType
        : node.NodeType;
      if (!rebuildedData[node.id].isClosed) {
        pushNode.strokeColor = colorGiver(typeOfNode);
        pushNode.color = '#ffffff';
        pushNode.highlightColor = '#ffffff';
        pushNode.strokeWidth = 4;

        if (!node.parentNode) {
          pushNode.svg = nodeTypes[typeOfNode].open;
          pushNode.size = 2000;
        } else {
          if (!nodeTypes[typeOfNode][node.NodeType])
            throw new Error('invalid type: ' + node.NodeType);
          pushNode.svg = nodeTypes[typeOfNode][node.NodeType].open;
        }
      } else {
        pushNode.color = colorGiver(typeOfNode);
        if (!node.parentNode) {
          pushNode.svg = nodeTypes[typeOfNode].close;
          pushNode.size = 2000;
        } else {
          if (!nodeTypes[typeOfNode][node.NodeType])
            throw new Error(
              'invalid type: ' + node.NodeType + ' in ' + node.id
            );
          pushNode.svg = nodeTypes[typeOfNode][node.NodeType].close;
        }
      }

      if (rebuildedData[node.id].fx) pushNode.fx = rebuildedData[node.id].fx;
      if (rebuildedData[node.id].fy) pushNode.fy = rebuildedData[node.id].fy;

      currentNodes.push(pushNode);
    }
  });

  const currentLinks = [];
  data.links.forEach(link => {
    const isConnected = rebuildedData[link.target][link.source].isAppear;

    if (isConnected) {
      currentLinks.push({
        ...link,
        color: colorGiver(rebuildedData[link.target][link.source].linkType)
      });
    }
  });

  return {
    nodes: currentNodes,
    links: currentLinks
  };
};

export default filterData;
