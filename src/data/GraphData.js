const GraphData = _ => {
  return {
    nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
    links: [
      { source: 'Harry', target: 'Sally' },
      { source: 'Harry', target: 'Alice' },
      { source: 'Alice', target: 'Sally' }
    ]
  };
};

export default GraphData();
