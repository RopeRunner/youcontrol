import openAndCloseNodes from './openAndCloseNodes';

const filterLinks = (filters, filter, rebuildedData, nodeId) => {
  if (!filters[filter]) return;

  const node = nodeId ? nodeId : rebuildedData.rootNode;
  for (let key in rebuildedData[node]) {
    if (
      key === 'isClosed' ||
      key === 'isAppear' ||
      rebuildedData[node][key].stepsToRoot
    )
      continue;

    if (rebuildedData[node][key].linkType === filter) {
      if (!rebuildedData[key].isClosed) {
        openAndCloseNodes(key, rebuildedData);
        rebuildedData[key].isClosed = true;
      }
      rebuildedData[key].isAppear = false;
    } else if (!rebuildedData[key].isClosed) {
      filterLinks(filters, filter, rebuildedData, key);
    }
  }
};

export default filterLinks;
