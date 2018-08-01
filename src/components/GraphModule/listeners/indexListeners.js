import clickNodeInGraph from './clickNodeInGraph';
import openAndCloseNodes from './openAndCloseNodes';
import filterLinks from './filterLinks';
import zoomRangePosition from './zoomRangePosition';
import findPosition from './findPosition';

// Here will be all listeners
const ROOT_LISTENER = {
  clickNodeInGraph,
  openAndCloseNodes,
  filterLinks,
  zoomRangePosition,
  findPosition
};

export default ROOT_LISTENER;
