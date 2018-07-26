const filterData = (data, rebuildedData, filters) => {
  const activeFilters = [];
  for (let key in filters) {
    if (!filters[key]) activeFilters.push(key);
  }

  const currentNodes = [];
  for (let i = 0; i < data.nodes.length; i++) {
    if (rebuildedData[data.nodes[i].id].isAppear) {
      let curNode = data.nodes[i].id;
      let isValid = true;
      while (curNode !== data.rootNode) {
        for (let key in rebuildedData[curNode]) {
          if (key === 'isClosed' || key === 'isAppear') continue;
          if (rebuildedData[curNode][key].stepsToRoot) {
            for (let j = 0; j < activeFilters.length; j++) {
              if (activeFilters[j] === rebuildedData[curNode][key].linkType) {
                isValid = false;
                break;
              }
            }
            if (isValid) {
              curNode = key;
              break;
            }
          }
          if (!isValid) break;
        }
        if (!isValid) break;
      }
      if (isValid) currentNodes.push(data.nodes[i]);
    }
  }

  const currentLinks = [];
  for (let i = 0; i < data.links.length; i++) {
    const target1 = data.links[i].target;
    const target2 = data.links[i].source;

    console.log(target1, target2, currentNodes);

    let connectionCounter = 0;
    for (let j = 0; j < currentNodes.length; j++) {
      if (currentNodes[j].id === target1 || currentNodes[j].id === target2)
        connectionCounter++;
      if (connectionCounter === 2) {
        currentLinks.push(data.links[i]);
        break;
      }
    }
  }

  return {
    nodes: currentNodes,
    links: currentLinks
  };
};

export default filterData;
