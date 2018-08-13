import closestNode from '../helper/closestNode';

const moveToNewLocation = (
  rebuildedData,
  defaultNodeValues,
  nodeId,
  nodeRadius,
  numberOfNodes
) => {
  const coords = {
    x: rebuildedData[nodeId].fx || rebuildedData[nodeId].x,
    y: rebuildedData[nodeId].fy || rebuildedData[nodeId].y
  };

  if (!(coords.x && coords.y)) {
    for (let key in rebuildedData[nodeId]) {
      if (key in defaultNodeValues) continue;

      if (
        rebuildedData[nodeId][key].isAppear &&
        rebuildedData[key].currentStepsToRoot + 1 ===
          rebuildedData[nodeId].currentStepsToRoot &&
        ((rebuildedData[key].fx && rebuildedData[key].fy) ||
          (rebuildedData[key].x && rebuildedData[key].y))
      ) {
        coords.x = rebuildedData[key].fx || rebuildedData[key].x;
        coords.y = rebuildedData[key].fy || rebuildedData[key].y;
      }
    }
  }

  const radius =
    numberOfNodes > 6 ? nodeRadius * Math.sqrt(numberOfNodes) : nodeRadius;

  const nearestNodes = closestNode(
    rebuildedData,
    defaultNodeValues,
    coords.x,
    coords.y,
    radius * 2
  );

  const eachCoord = [];
  if (nearestNodes) {
    const passedNodes = {};
    const blockedWays = [];
    for (let key in nearestNodes) {
      passedNodes[key] = true;
      const node1Y =
        -((rebuildedData[key].fy || rebuildedData[key].y) - coords.y) /
        nearestNodes[key];
      const node1X =
        ((rebuildedData[key].fx || rebuildedData[key].x) - coords.x) /
        nearestNodes[key];
      const radian1 =
        node1Y > 0
          ? Math.acos(node1X)
          : Math.PI + (Math.PI - Math.acos(node1X));

      for (let node in rebuildedData[key]) {
        if (
          node in defaultNodeValues ||
          !(node in nearestNodes) ||
          node in passedNodes
        )
          continue;

        const node2Y =
          -((rebuildedData[node].fy || rebuildedData[node].y) - coords.y) /
          nearestNodes[node];
        const node2X =
          ((rebuildedData[node].fx || rebuildedData[node].x) - coords.x) /
          nearestNodes[node];
        const radian2 =
          node2Y > 0
            ? Math.acos(node2X)
            : Math.PI + (Math.PI - Math.acos(node2X));

        if (radian1 === radian2) continue;

        let sector = {};
        if (radian1 > radian2) {
          if (radian1 - radian2 < Math.PI) {
            sector.from = radian2;
            sector.to = radian1;
          } else if (radian1 - radian2 !== Math.PI) {
            sector.from = radian1;
            sector.to = radian2;
          } else continue;
        } else {
          if (radian2 - radian1 < Math.PI) {
            sector.from = radian1;
            sector.to = radian2;
          } else if (radian2 - radian1 !== Math.PI) {
            sector.from = radian2;
            sector.to = radian1;
          } else continue;
        }

        let k = 0;
        let isChecked = false;
        while (!isChecked) {
          isChecked = true;
          for (let i = 0; i < blockedWays.length; i++) {
            if (k++ > 20) throw new Error('too many iterations');
            if (blockedWays[i].to < blockedWays[i].from) {
              if (
                (sector.from >= blockedWays[i].from ||
                  sector.from <= blockedWays[i].to) &&
                (sector.to >= blockedWays[i].from ||
                  sector.to <= blockedWays[i].to)
              ) {
                const sectorFrom =
                  sector.from <= blockedWays[i].to
                    ? sector.from + Math.PI * 2
                    : sector.from;
                const sectorTo =
                  sector.to <= blockedWays[i].to
                    ? sector.to + Math.PI * 2
                    : sector.to;
                if (
                  sectorFrom - blockedWays[i].from >
                  sectorTo - blockedWays[i].from
                ) {
                  sector.from = sector.to = 0;
                  blockedWays.splice(0, blockedWays.length);
                  isChecked = true;
                  break;
                } else {
                  sector.from = blockedWays[i].from;
                  sector.to = blockedWays[i].to;
                  blockedWays.splice(i, 1);
                  isChecked = true;
                  break;
                }
              } else if (
                sector.from >= blockedWays[i].from ||
                sector.from <= blockedWays[i].to
              ) {
                sector.from = blockedWays[i].from;
                blockedWays.splice(i, 1);
                isChecked = false;
                i--;
              } else if (
                sector.to >= blockedWays[i].from ||
                sector.to <= blockedWays[i].to
              ) {
                sector.to = blockedWays[i].to;
                blockedWays.splice(i, 1);
                isChecked = false;
                i--;
              } else if (
                sector.to < sector.from &&
                sector.from < blockedWays[i].from &&
                sector.to > blockedWays[i].to
              ) {
                blockedWays.splice(i, 1);
                isChecked = false;
                i--;
              }
            } else {
              if (
                sector.from >= blockedWays[i].from &&
                sector.from <= blockedWays[i].to &&
                sector.to >= blockedWays[i].from &&
                sector.to <= blockedWays[i].to
              ) {
                if (
                  sector.from - blockedWays[i].from >
                  sector.to - blockedWays[i].from
                ) {
                  sector.from = sector.to = 0;
                  blockedWays.splice(0, blockedWays.length);
                  isChecked = true;
                  break;
                } else {
                  sector.from = blockedWays[i].from;
                  sector.to = blockedWays[i].to;
                  blockedWays.splice(i, 1);
                  isChecked = true;
                  break;
                }
              } else if (
                sector.from >= blockedWays[i].from &&
                sector.from <= blockedWays[i].to
              ) {
                sector.from = blockedWays[i].from;
                blockedWays.splice(i, 1);
                isChecked = false;
                i--;
              } else if (
                sector.to >= blockedWays[i].from &&
                sector.to <= blockedWays[i].to
              ) {
                sector.to = blockedWays[i].to;
                blockedWays.splice(i, 1);
                isChecked = false;
                i--;
              } else if (
                sector.from < sector.to &&
                sector.from < blockedWays[i].from &&
                sector.to > blockedWays[i].to
              ) {
                blockedWays.splice(i, 1);
                isChecked = false;
                i--;
              } else if (
                sector.from > sector.to &&
                sector.from < blockedWays[i].from
              ) {
                blockedWays.splice(i, 1);
                isChecked = false;
                i--;
              }
            }
          }
        }

        blockedWays.push(sector);

        if (blockedWays[0].from === blockedWays[0].to) {
          const radianParts = (Math.PI * 2) / numberOfNodes;
          for (let i = 0; i < numberOfNodes; i++) {
            const curRadian = radianParts * i;
            eachCoord.push({
              x: coords.x + radius * Math.cos(curRadian),
              y: coords.y - radius * Math.sin(curRadian)
            });
          }

          return eachCoord;
        }
      }
    }

    if (!blockedWays.length) {
      const radianParts = (Math.PI * 2) / numberOfNodes;
      for (let i = 0; i < numberOfNodes; i++) {
        const curRadian = radianParts * i;
        eachCoord.push({
          x: coords.x + radius * Math.cos(curRadian),
          y: coords.y - radius * Math.sin(curRadian)
        });
      }

      return eachCoord;
    }

    const freeSpace = [
      {
        from: blockedWays[0].to,
        to: blockedWays[0].from
      }
    ];
    for (let i = 1; i < blockedWays.length; i++) {
      for (let j = 0; j < freeSpace.length; j++) {
        if (
          freeSpace[j].from > freeSpace[j].to &&
          (blockedWays[i].from >= freeSpace[j].from ||
            blockedWays[i].from <= freeSpace[j].to) &&
          (blockedWays[i].to >= freeSpace[j].from ||
            blockedWays[i].to <= freeSpace[j].to)
        ) {
          freeSpace[j].to = blockedWays[i].from;
          freeSpace.push({
            from: blockedWays[i].to,
            to: freeSpace[j].to
          });
          break;
        } else if (
          freeSpace[j].from < freeSpace[j].to &&
          blockedWays[i].from >= freeSpace[j].from &&
          blockedWays[i].from <= freeSpace[j].to &&
          blockedWays[i].to >= freeSpace[j].from &&
          blockedWays[i].to <= freeSpace[j].to
        ) {
          freeSpace[j].to = blockedWays[i].from;
          freeSpace.push({
            from: blockedWays[i].to,
            to: freeSpace[j].to
          });
          break;
        }
      }
    }

    const freeSpaceLength = freeSpace.map(
      space =>
        (space.to < space.from ? space.to + Math.PI * 2 : space.to) - space.from
    );

    const fullLength = freeSpaceLength.reduce((sum, length) => sum + length);
    const nodesInSpace = freeSpaceLength.map(length =>
      Math.floor((length / fullLength) * numberOfNodes)
    );

    const biggestSpaces = [...freeSpaceLength];
    const notIncluded =
      numberOfNodes - nodesInSpace.reduce((sum, length) => sum + length);
    for (let i = 0; i < notIncluded; i++) {
      const index = biggestSpaces.indexOf(Math.max(biggestSpaces));
      freeSpaceLength[index] = 0;
      nodesInSpace[index]++;
    }

    freeSpace.forEach((space, index) => {
      const step = freeSpaceLength[index] / (nodesInSpace[index] + 1);
      for (let i = 1; i < nodesInSpace[index] + 1; i++) {
        eachCoord.push({
          x: coords.x + radius * Math.cos(space.from + step * i),
          y: coords.y - radius * Math.sin(space.from + step * i)
        });
      }
    });
  } else {
    const radianParts = (Math.PI * 2) / numberOfNodes;
    for (let i = 0; i < numberOfNodes; i++) {
      const curRadian = radianParts * i;
      eachCoord.push({
        x: coords.x + radius * Math.cos(curRadian),
        y: coords.y - radius * Math.sin(curRadian)
      });
    }
  }

  return eachCoord;
};

export default moveToNewLocation;
