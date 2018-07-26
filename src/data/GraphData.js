const GraphData = _ => {
  return {
    rootNode: 'Oleh',
    nodes: [
      {
        id: 'Harry',
        text: 'This is a description about Harry',
        isClosed: true,
        isAppear: false
      },
      {
        id: 'Sally',
        text: 'This is a description about Sally',
        isClosed: true,
        isAppear: false
      },
      {
        id: 'Alice',
        text: 'This is a description about Alice',
        isClosed: true,
        isAppear: false
      },
      {
        id: 'Oleh',
        text: 'This is a description about Oleh',
        isClosed: true,
        isAppear: false
      },
      {
        id: 'Roma',
        text: 'This is a description about Roma',
        isClosed: true,
        isAppear: false
      },
      {
        id: 'Sofia',
        text: 'This is a description about Sofia',
        isClosed: true,
        isAppear: false
      },
      {
        id: 'Vika',
        text: 'This is a description about Vika',
        isClosed: true,
        isAppear: false
      },
      {
        id: 'Artem',
        text: 'This is a description about Artem',
        isClosed: true,
        isAppear: false
      },
      {
        id: 'Vova',
        text: 'This is a description about Vova',
        isClosed: true,
        isAppear: false
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
