const colorGiver = (NodeType, nodeTypes) => {
  if (!(NodeType in nodeTypes))
    throw new Error('invalid basic type: ' + NodeType);
  return nodeTypes[NodeType].color;
};

export default colorGiver;
