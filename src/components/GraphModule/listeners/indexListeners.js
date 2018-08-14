import clickNodeInGraph from './clickNodeInGraph';
import openAndCloseNodes from './openAndCloseNodes';
import filterTypes from './filterTypes';
import zoomRangePosition from './zoomRangePosition';
import findPosition from './findPosition';
import countOpenNodes from './countOpenNodes';
import moveToNewLocation from './moveToNewLocation';

// Here will be all listeners
const ROOT_LISTENER = {
  clickNodeInGraph,
  openAndCloseNodes,
  filterTypes,
  zoomRangePosition,
  findPosition,
  countOpenNodes,
  moveToNewLocation
};

export default ROOT_LISTENER;
