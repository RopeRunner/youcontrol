const filterData = data => {
  const openNodes = [];
  for (let i = 0; i < data.nodes.length; i++) {
    if (data.nodes[i].isAppear) openNodes.push(data.nodes[i]);
  }

  const openLinks = [];
  for (let i = 0; i < data.links.length; i++) {
    let connections = 0;

    for (let j = 0; j < openNodes.length; j++) {
      if (
        openNodes[j].id === data.links[i].target ||
        openNodes[j].id === data.links[i].source
      ) {
        connections++;
        if (connections === 2) {
          openLinks.push(data.links[i]);
          break;
        }
      }
    }
  }

  return {
    nodes: openNodes,
    links: openLinks
  };
};

export default filterData;
