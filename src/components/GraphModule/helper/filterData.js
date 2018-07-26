const filterData = (data, filters) => {
  let openNodes = [];
  for (let i = 0; i < data.nodes.length; i++) {
    if (data.nodes[i].isAppear)
      openNodes.push({
        id: data.nodes[i].id,
        connectionCounter: 0
      });
  }

  const activeFilters = [];
  for (let key in filters) {
    if (!filters[key]) activeFilters.push(key);
  }

  console.log(activeFilters);

  const openLinks = [];
  for (let i = 0; i < data.links.length; i++) {
    let isInvalid = false;

    for (let j = 0; j < activeFilters.length; j++) {
      if (activeFilters[j] === data.links[i].linkType) isInvalid = true;
    }

    if (isInvalid) continue;

    let connections = 0;

    for (let j = 0; j < openNodes.length; j++) {
      if (
        openNodes[j].id === data.links[i].target ||
        openNodes[j].id === data.links[i].source
      ) {
        connections++;
        if (connections === 2) {
          const linkObj = {
            target: data.links[i].target,
            source: data.links[i].source
          };
          switch (data.links[i].linkType) {
            case 'current':
              linkObj.color = 'green';
              break;
            case 'new':
              linkObj.color = 'red';
              break;
            case 'old':
              linkObj.color = 'darkcyan';
              break;
            default:
              throw new Error(
                `unknown type of link: ${data.links[i].linkType}`
              );
          }
          openLinks.push(linkObj);
          break;
        }
      }
    }
  }

  for (let i = 0; i < openLinks.length; i++) {
    for (let j = 0; j < openNodes.length; j++) {
      if (
        openNodes[j].id === openLinks[i].target ||
        openNodes[j].id === openLinks[i].source
      )
        openNodes[j].connectionCounter++;
    }
  }

  openNodes = openNodes.filter(
    node => (node.id !== data.rootNode ? !!node.connectionCounter : true)
  );

  return {
    nodes: openNodes,
    links: openLinks
  };
};

export default filterData;
