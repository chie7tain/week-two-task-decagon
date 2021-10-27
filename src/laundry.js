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
  console.log(cleanPileObj);
  for (let pile of dirtyPile) {
    if (dirtyPileObj[pile]) {
      dirtyPileObj[pile]++;
    } else dirtyPileObj[pile] = 1;
  }
  console.log(numberOfCleanPairs);
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
    console.log('RRR:' + timesToWash);
    console.log('RRRTT:' + numberOfCleanPairs);
  }
  console.log('RRRSSS:' + timesWashed + ' numClean: ' + numberOfCleanPairs);
  for (let dirtySocks in dirtyPileObj) {
    while (dirtyPileObj[dirtySocks] >= 2 && noOfWashes - timesWashed >= 2) {
      dirtyPileObj[dirtySocks] -= 2;
      console.log('DDD:' + dirtyPileObj[dirtySocks]);
      console.log('TTT:' + timesWashed);
      numberOfCleanPairs++;
      timesWashed += 2;
      console.log('NNN:' + numberOfCleanPairs);
    }
  }

  return numberOfCleanPairs;
}

const numberMachineCanWash = 0;

const cleanPile = [10, 11, 12, 11, 10, 10, 13, 11, 12, 10, 13, 14, 11, 10, 12];

const dirtyPile = [10, 10, 11, 12, 13, 10, 14, 14, 14, 12, 12, 10, 10, 11, 11];

console.log(getMaxPairs(numberMachineCanWash, cleanPile, dirtyPile));

module.exports = getMaxPairs;
