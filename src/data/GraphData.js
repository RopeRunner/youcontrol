const GraphData = _ => {
  return {
    nodes: [
      {
        id: 'Harry',
        text: 'This is a description about Harry'
      },
      {
        id: 'Sally',
        text: 'This is a description about Sally'
      },
      {
        id: 'Alice',
        text: 'This is a description about Alice'
      },
      {
        id: 'Oleh',
        text: 'This is a description about Oleh'
      },
      {
        id: 'Roma',
        text: 'This is a description about Roma'
      },
      {
        id: 'Sofia',
        text: 'This is a description about Sofia'
      },
      {
        id: 'Vika',
        text: 'This is a description about Vika'
      },
      {
        id: 'Artem',
        text: 'This is a description about Artem'
      },
      {
        id: 'Vova',
        text: 'This is a description about Vova'
      }
    ],
    links: [
      {
        source: 'Harry',
        target: 'Sally',
        linkType: 'new'
      },
      {
        source: 'Harry',
        target: 'Alice',
        linkType: 'new'
      },
      {
        source: 'Oleh',
        target: 'Artem',
        linkType: 'current'
      },
      {
        source: 'Harry',
        target: 'Oleh',
        linkType: 'new'
      },
      {
        source: 'Harry',
        target: 'Vova',
        linkType: 'new'
      },
      {
        source: 'Oleh',
        target: 'Vika',
        linkType: 'current'
      },
      {
        source: 'Oleh',
        target: 'Roma',
        linkType: 'old'
      },
      {
        source: 'Oleh',
        target: 'Sofia',
        linkType: 'old'
      },
      {
        source: 'Oleh',
        target: 'Vova',
        linkType: 'current'
      }
    ]
  };
};

export default GraphData();
