const defaultGraphValues = _ => ({
  NodeDefaultValues: {
    isClosed: true,
    isAppear: false,
    NodeType: null,
    parentNode: null,
    label: null,
    x: 0,
    y: 0,
    fx: null,
    fy: null,
    connectionsCounter: 0,
    minStepsToRoot: 0,
    currentStepsToRoot: 0
  },
  LinkDefaultValues: {
    isAppear: false,
    linkType: null
  }
});

export default defaultGraphValues();
