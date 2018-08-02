const colorGiver = NodeType => {
  switch (NodeType) {
    case 'INDIVIDUAL':
      return '#ff5607';
    case 'LEGAL_ENTITY':
      return '#11a7f3';
    case 'DISCONNECTED':
      return '#5e72c4';
    default:
      return null;
  }
};

export default colorGiver;
