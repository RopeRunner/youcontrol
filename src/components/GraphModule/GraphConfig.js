const Config = _ => ({
  highlightOpacity: 0.3,
  nodeHighlightBehavior: true,
  minZoom: 0.2,
  maxZoom: 1.5,
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  panAndZoom: true,
  node: {
    color: '#11a7f3',
    fontSize: 15,
    size: 500,
    fontWeight: 'bolder',
    symbolType: 'circle',
    labelProperty: 'nodeName',
    highlightFontSize: 15,
    highlightFontWeight: 'bolder',
    highlightColor: '#2dbc60',
    highlightStrokeColor: '#2dbc60'
  },
  link: {
    highlightColor: '#2dbc60'
  }
});

export default Config();
