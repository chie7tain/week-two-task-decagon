/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */

function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let cleanPileObj = {};
  let dirtyPileObj = {};
  let numberOfCleanPairs = 0;

  for (let pile of cleanPile) {
    if (cleanPileObj[pile]) {
      cleanPileObj[pile]++;
      if (cleanPileObj[pile] === 2) {
        numberOfCleanPairs++;
        cleanPileObj[pile] = 0;
      }
    } else {
      cleanPileObj[pile] = 1;
    }
  }

  for (let pile of cleanPile) {
    if (cleanPileObj[pile] === 0) delete cleanPileObj[pile];
  }
  for (let pile of dirtyPile) {
    if (dirtyPileObj[pile]) {
      dirtyPileObj[pile]++;
    } else dirtyPileObj[pile] = 1;
  }

  let washed = false;
  var timesWashed = 0;
  for (let timesToWash = 0; timesToWash < noOfWashes; timesToWash++) {
    if (Object.keys(cleanPileObj).length > 0) {
      for (let cleanSocks in cleanPileObj) {
        if (dirtyPileObj[cleanSocks]) {
          dirtyPileObj[cleanSocks]--;
          numberOfCleanPairs++;
          if (dirtyPileObj[cleanSocks] === 0) delete dirtyPileObj[cleanSocks];
          delete cleanPileObj[cleanSocks];
          washed = true;
          break;
        } else {
          washed = false;
          delete cleanPileObj[cleanSocks];
        }
      }
    } else {
      washed = false;
      timesWashed = timesToWash;
      break;
    }
    if (Object.keys(cleanPileObj).length <= 0) {
      timesWashed = washed ? timesToWash + 1 : timesToWash;
      break;
    }
  }

  for (let dirtySocks in dirtyPileObj) {
    while (dirtyPileObj[dirtySocks] >= 2 && noOfWashes - timesWashed >= 2) {
      dirtyPileObj[dirtySocks] -= 2;
      numberOfCleanPairs++;
      timesWashed += 2;
    }
  }

  return numberOfCleanPairs;
}



module.exports = getMaxPairs;
