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
      rebuildedData[key].isClosed = false;
      openAndCloseNodes(key, rebuildedData);
      rebuildedData[key].isAppear = false;
      rebuildedData[node].isClosed = true;
    } else if (!rebuildedData[key].isClosed) {
      filterLinks(filters, filter, rebuildedData, key);
    }
  }
};

export default filterLinks;
