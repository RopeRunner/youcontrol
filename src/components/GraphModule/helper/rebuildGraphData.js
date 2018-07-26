import RebuildedGraphData from '../../../data/RebuildedGraphData';

const rebuildGraphData = data => {
  RebuildedGraphData.rootNode = data.rootNode;
  for (let i = 0; i < data.nodes.length; i++) {
    RebuildedGraphData[data.nodes[i].id] = {
      isClosed: true,
      isAppear: false
    };
  }
  RebuildedGraphData[data.rootNode].isAppear = true;

  for (let i = 0; i < data.links.length; i++) {
    const target1 = data.links[i].target;
    const target2 = data.links[i].source;

    RebuildedGraphData[target1][target2] = {
      linkType: data.links[i].linkType,
      stepsToRoot: 0
    };

    RebuildedGraphData[target2][target1] = {
      linkType: data.links[i].linkType,
      stepsToRoot: 0
    };
  }

  const currentNodes = [];
  const passedNodes = {};
  currentNodes.push(data.rootNode);

  while (currentNodes.length) {
    const curNode = currentNodes.shift();
    passedNodes[curNode] = true;

    for (let key in RebuildedGraphData[curNode]) {
      if (key === 'isClosed' || key === 'isAppear') continue;
      if (key === RebuildedGraphData.rootNode) {
        RebuildedGraphData[curNode][key].stepsToRoot = 1;
        continue;
      }

      if (!(key in passedNodes)) currentNodes.push(key);

      for (let value in RebuildedGraphData[key]) {
        const steps = RebuildedGraphData[key][value].stepsToRoot;
        if (steps) {
          RebuildedGraphData[curNode][key].stepsToRoot = steps + 1;
          break;
        }
      }
    }
  }
};

export default rebuildGraphData;
