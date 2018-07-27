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
          if (
            key === 'isClosed' ||
            key === 'isAppear' ||
            key === 'connectionsCounter'
          )
            continue;
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
      if (isValid) {
        const pushNode = { ...data.nodes[i] };
        if (!rebuildedData[data.nodes[i].id].isClosed) {
          pushNode.color = '#ffffff';
          pushNode.strokeColor = 'rgb(50, 250, 50)';
          pushNode.strokeWidth = 4;
        }
        currentNodes.push(pushNode);
      }
    }
  }

  const currentLinks = [];
  for (let i = 0; i < data.links.length; i++) {
    const target1 = data.links[i].target;
    const target2 = data.links[i].source;

    let connectionCounter = 0;
    for (let j = 0; j < currentNodes.length; j++) {
      if (currentNodes[j].id === target1 || currentNodes[j].id === target2)
        connectionCounter++;
      if (
        connectionCounter === 2 &&
        (!rebuildedData[target1].isClosed || !rebuildedData[target2].isClosed)
      ) {
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
