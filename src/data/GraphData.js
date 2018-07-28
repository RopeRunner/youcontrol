import LinkTypes from './LinkTypes';

const GraphData = _ => {
  return {
    rootNode: 'Oleh',
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
        color: LinkTypes.LINK_TYPE_0
      },
      {
        source: 'Harry',
        target: 'Alice',
        color: LinkTypes.LINK_TYPE_3
      },
      {
        source: 'Oleh',
        target: 'Artem',
        color: LinkTypes.LINK_TYPE_1
      },
      {
        source: 'Harry',
        target: 'Oleh',
        color: LinkTypes.LINK_TYPE_0
      },
      {
        source: 'Oleh',
        target: 'Vika',
        color: LinkTypes.LINK_TYPE_1
      },
      {
        source: 'Oleh',
        target: 'Roma',
        color: LinkTypes.LINK_TYPE_2
      },
      {
        source: 'Oleh',
        target: 'Sofia',
        color: LinkTypes.LINK_TYPE_2
      },
      {
        source: 'Oleh',
        target: 'Vova',
        color: LinkTypes.LINK_TYPE_1
      }
    ]
  };
};

export default GraphData();
