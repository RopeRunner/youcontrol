const Config = _ => ({
  highlightOpacity: 0.3,
  nodeHighlightBehavior: true,
  minZoom: 0.5,
  maxZoom: 1.5,
  node: {
    color: 'rgb(50, 250, 50)',
    fontSize: 18,
    size: 500,
    fontWeight: 'bold',
    strokeColor: 'rgb(50, 250, 50)',
    highlightFontSize: 18,
    highlightFontWeight: 'bold'
  },
  link: {
    highlightColor: 'green'
  }
});

export default Config();
