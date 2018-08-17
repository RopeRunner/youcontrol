import typeSwitcher from './typeSwitcher';

const rebuildGraphData = (
  data,
  rebuildedData,
  defaultGraphValues,
  nodeTypes,
  isNewData,
  alreadyExist
) => {
  if (isNewData) {
    if (!alreadyExist) {
      rebuildedData.rootNode = data.rootNode;
      rebuildedData.otherMainNodes = [];
    }
    data.nodes.forEach(node => {
      if (node.uniqueId in rebuildedData) return;
      const splitedClass = node.className.split('.');
      const type = splitedClass[splitedClass.length - 1];
      const moreData = typeSwitcher(type, node.fields);
      rebuildedData[node.uniqueId] = {
        ...defaultGraphValues.NodeDefaultValues,
        ...moreData
      };
      console.log(rebuildedData[node.uniqueId]);
      if (
        rebuildedData[node.uniqueId].NodeType in nodeTypes &&
        node.uniqueId !== rebuildedData.rootNode
      )
        rebuildedData.otherMainNodes.push(node.uniqueId);
    });

    data.edges.forEach(link => {
      for (let key in rebuildedData[link.fromId]) {
        if (key in defaultGraphValues.NodeDefaultValues) continue;

        if (
          rebuildedData[link.fromId][key].fromId === link.toId ||
          rebuildedData[link.fromId][key].toId === link.toId
        )
          return;
      }
      console.log(link);
      if (
        rebuildedData[link.fromId].NodeType in nodeTypes &&
        rebuildedData[link.toId].NodeType in nodeTypes
      ) {
        const moreData = typeSwitcher(link.fieldName, link.fields);

        const splitedFromId = link.fromId.split('/');
        splitedFromId[0] += `_${link.fieldName}`;
        const fromIdNewNode = splitedFromId.join('/');
        if (!(fromIdNewNode in rebuildedData)) {
          rebuildedData[fromIdNewNode] = {
            ...defaultGraphValues.NodeDefaultValues,
            ...moreData,
            parentNode: link.fromId
          };
          rebuildedData[link.fromId][fromIdNewNode] = {
            ...defaultGraphValues.LinkDefaultValues,
            fromId: link.fromId,
            toId: link.toId
          };
          rebuildedData[fromIdNewNode][link.fromId] = {
            ...defaultGraphValues.LinkDefaultValues,
            fromId: link.fromId,
            toId: link.toId
          };
        }

        const splitedToId = link.toId.split('/');
        splitedToId[0] += `_${link.fieldName}`;
        const toIdNewNode = splitedToId.join('/');
        if (!(toIdNewNode in rebuildedData)) {
          rebuildedData[toIdNewNode] = {
            ...defaultGraphValues.NodeDefaultValues,
            ...moreData,
            parentNode: link.toId
          };
          rebuildedData[link.toId][toIdNewNode] = {
            ...defaultGraphValues.LinkDefaultValues,
            fromId: link.fromId,
            toId: link.toId
          };
          rebuildedData[toIdNewNode][link.toId] = {
            ...defaultGraphValues.LinkDefaultValues,
            fromId: link.fromId,
            toId: link.toId
          };
        }

        rebuildedData[fromIdNewNode][toIdNewNode] = {
          ...defaultGraphValues.LinkDefaultValues,
          fromId: link.fromId,
          toId: link.toId
        };
        rebuildedData[toIdNewNode][fromIdNewNode] = {
          ...defaultGraphValues.LinkDefaultValues,
          fromId: link.fromId,
          toId: link.toId
        };
      } else {
        if (rebuildedData[link.fromId].NodeType in nodeTypes) {
          rebuildedData[link.toId].parentNode = link.fromId;
        } else {
          rebuildedData[link.fromId].parentNode = link.toId;
        }
        rebuildedData[link.fromId][link.toId] = {
          ...defaultGraphValues.LinkDefaultValues,
          fromId: link.fromId
        };
        rebuildedData[link.toId][link.fromId] = {
          ...defaultGraphValues.LinkDefaultValues,
          fromId: link.fromId
        };
      }
    });

    rebuildedData[data.rootNode].isAppear = true;
    rebuildedData[data.rootNode].fx = document.documentElement.clientWidth / 2;
    rebuildedData[data.rootNode].fy = document.documentElement.clientHeight / 3;
  } else {
    rebuildedData.rootNode = data.rootNode;
    rebuildedData.otherMainNodes = [];
    data.nodes.forEach(node => {
      rebuildedData[node.id] = {
        ...defaultGraphValues.NodeDefaultValues,
        NodeType: node.NodeType,
        parentNode: node.parentNode,
        label: node.nodeName || node.id.toUpperCase(),
        headerText: node.headerText || node.id,
        mainText: node.mainText
      };
      if (rebuildedData.rootNode !== node.id && !node.parentNode)
        rebuildedData.otherMainNodes.push(node.id);
    });

    rebuildedData[data.rootNode].isAppear = true;
    rebuildedData[data.rootNode].fx = document.documentElement.clientWidth / 2;
    rebuildedData[data.rootNode].fy = document.documentElement.clientHeight / 3;

    data.links.forEach(link => {
      const target1 = link.target;
      const target2 = link.source;

      rebuildedData[target1][target2] = {
        ...defaultGraphValues.LinkDefaultValues
      };
      rebuildedData[target2][target1] = {
        ...defaultGraphValues.LinkDefaultValues
      };
    });
  }

  console.log(rebuildedData);

  const NodesQueue = [];
  const passedNodes = {};
  NodesQueue.push(rebuildedData.rootNode);
  passedNodes[rebuildedData.rootNode] = true;
  while (NodesQueue.length) {
    const curNode = NodesQueue.shift();
    for (let key in rebuildedData[curNode]) {
      if (key in defaultGraphValues.NodeDefaultValues) continue;
      if (!(key in passedNodes)) {
        NodesQueue.push(key);
        passedNodes[key] = true;
      }
      if (key === rebuildedData.rootNode) {
        rebuildedData[curNode].minStepsToRoot = 1;
      } else if (
        (rebuildedData[curNode].minStepsToRoot === 0 ||
          rebuildedData[curNode].minStepsToRoot >
            rebuildedData[key].minStepsToRoot) &&
        curNode !== rebuildedData.rootNode &&
        rebuildedData[key].minStepsToRoot !== 0
      ) {
        rebuildedData[curNode].minStepsToRoot =
          rebuildedData[key].minStepsToRoot + 1;
      }
    }
  }
};

export default rebuildGraphData;
