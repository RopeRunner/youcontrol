const zoomRangePosition = (minZoom, maxZoom, rangeScale, mouseXPosition) => {
  const {
    left: leftRange,
    right: rightRange
  } = rangeScale.getBoundingClientRect();
  if (leftRange > mouseXPosition) return minZoom;
  if (rightRange < mouseXPosition) return maxZoom;
  const zoomPercent =
    (mouseXPosition - leftRange) / ((rightRange - leftRange) / 100) / 100;
  const curZoom =
    Math.round((minZoom + (maxZoom - minZoom) * zoomPercent) * 1000) / 1000;
  return curZoom;
};

export default zoomRangePosition;
