const countOpenNodes = (
  rebuildedData,
  defaultNodeValues,
  nodeId,
  visitedNodes = {
    [rebuildedData.rootNode]: true
  }
) => {
  const node = nodeId || rebuildedData.rootNode;
  let number = 1;

  for (let key in rebuildedData[node]) {
    if (
      key in defaultNodeValues ||
      key in visitedNodes ||
      !rebuildedData[key].isAppear
    )
      continue;
    visitedNodes[key] = true;
    number += countOpenNodes(
      rebuildedData,
      defaultNodeValues,
      key,
      visitedNodes
    );
  }

  return number;
};

export default countOpenNodes;
