import LinkTypes from './LinkTypes';
import NodeTypes from './NodeTypes';

const GraphData = _ => {
  return {
    rootNode: 'Oleh',
    nodes: [
      {
        id: 'Harry',
        text: 'This is a description about Harry',
        svg: NodeTypes.NODE_TYPE_2
      },
      {
        id: 'Sally',
        text: 'This is a description about Sally',
        svg: NodeTypes.NODE_TYPE_0
      },
      {
        id: 'Alice',
        text: 'This is a description about Alice',
        svg: NodeTypes.NODE_TYPE_0
      },
      {
        id: 'Oleh',
        text: 'This is a description about Oleh',
        svg: NodeTypes.NODE_TYPE_1
      },
      {
        id: 'Roma',
        text: 'This is a description about Roma',
        svg: NodeTypes.NODE_TYPE_0
      },
      {
        id: 'Sofia',
        text: 'This is a description about Sofia',
        svg: NodeTypes.NODE_TYPE_0
      },
      {
        id: 'Vika',
        text: 'This is a description about Vika',
        svg: NodeTypes.NODE_TYPE_0
      },
      {
        id: 'Artem',
        text: 'This is a description about Artem',
        svg: NodeTypes.NODE_TYPE_0
      },
      {
        id: 'Vova',
        text: 'This is a description about Vova',
        svg: NodeTypes.NODE_TYPE_0
      }
    ],
    links: [
      {
        source: 'Harry',
        target: 'Sally',
        color: LinkTypes.LINK_TYPE_0.id
      },
      {
        source: 'Harry',
        target: 'Alice',
        color: LinkTypes.LINK_TYPE_3.id
      },
      {
        source: 'Oleh',
        target: 'Artem',
        color: LinkTypes.LINK_TYPE_1.id
      },
      {
        source: 'Harry',
        target: 'Oleh',
        color: LinkTypes.LINK_TYPE_0.id
      },
      {
        source: 'Oleh',
        target: 'Vika',
        color: LinkTypes.LINK_TYPE_1.id
      },
      {
        source: 'Oleh',
        target: 'Roma',
        color: LinkTypes.LINK_TYPE_2.id
      },
      {
        source: 'Oleh',
        target: 'Sofia',
        color: LinkTypes.LINK_TYPE_2.id
      },
      {
        source: 'Oleh',
        target: 'Vova',
        color: LinkTypes.LINK_TYPE_1.id
      }
    ]
  };
};

export default GraphData();
