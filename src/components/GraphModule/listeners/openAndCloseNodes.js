const openAndCloseNodes = (nodeId, rebuildedData, filters) => {
  if (!rebuildedData[nodeId].isClosed) {
    for (let key in rebuildedData[nodeId]) {
      if (key === 'isClosed' || key === 'isAppear') continue;

      if (
        !rebuildedData[nodeId][key].stepsToRoot &&
        !rebuildedData[key].isClosed
      ) {
        openAndCloseNodes(key, rebuildedData);
        rebuildedData[key].isAppear = false;
      } else if (rebuildedData[key].isClosed) {
        rebuildedData[key].isAppear = false;
      }
    }

    rebuildedData[nodeId].isClosed = true;
  } else {
    rebuildedData[nodeId].isClosed = false;
    Object.keys(rebuildedData[nodeId]).forEach(key => {
      if (key === 'isClosed' || key === 'isAppear') return;

      const activeFilters = [];
      Object.keys(filters).forEach(filter => {
        if (!filters[filter]) activeFilters.push(filter);
      });

      rebuildedData[key].isAppear = true;
    });
  }
};

export default openAndCloseNodes;
