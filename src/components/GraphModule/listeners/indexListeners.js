import clickNodeInGraph from './clickNodeInGraph';
import openAndCloseNodes from './openAndCloseNodes';
import filterLinks from './filterLinks';
import zoomRangePosition from './zoomRangePosition';
import findPosition from './findPosition';
import countOpenNodes from './countOpenNodes';
import moveToNewLocation from './moveToNewLocation';

// Here will be all listeners
const ROOT_LISTENER = {
  clickNodeInGraph,
  openAndCloseNodes,
  filterLinks,
  zoomRangePosition,
  findPosition,
  countOpenNodes,
  moveToNewLocation
};

export default ROOT_LISTENER;
