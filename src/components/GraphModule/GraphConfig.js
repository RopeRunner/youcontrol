const Config = _ => ({
  highlightOpacity: 0.3,
  nodeHighlightBehavior: true,
  minZoom: 0.5,
  maxZoom: 1.5,
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  panAndZoom: true,
  node: {
    color: '#11a7f3',
    fontSize: 18,
    size: 500,
    fontWeight: 'bold',
    strokeColor: '#11a7f3',
    symbolType: 'circle',
    labelProperty: 'nodeName',
    highlightFontSize: 18,
    highlightFontWeight: 'bold'
  },
  link: {
    highlightColor: '#11a7f3'
  }
});

export default Config();
