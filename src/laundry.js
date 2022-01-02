/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */

function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  // first create objects to hold the various piles of socks

  let cleanPileObj = {};
  let dirtyPileObj = {};
  let numberOfCleanPairs = 0;

  for (let sock of cleanPile) {
    // check for clean piles of socks in the clean  pile object
    // if it finds a clean pile of sock, add it to the object
    // and it was already there increment the number of pairs i.e the number of occurence
    if (cleanPileObj[sock]) {
      cleanPileObj[sock]++;
      // if the clean pile of socks is there and its occurence is equal to two (2) that means we have a clean pair of socks
      if (cleanPileObj[sock] === 2) {
        // increment the number of clean pairs variable to keep count of how many clean pairs we have yet or encountered
        numberOfCleanPairs++;
        // then we need to remove the clean pair of socks from the clean pile object by setting the occurence to zero;
        cleanPileObj[sock] = 0;
      }
      // if the clean pile of socks is not in the object, add it to the object
    } else {
      cleanPileObj[sock] = 1;
    }
  }

  for (let sock of cleanPile) {
    if (cleanPileObj[sock] === 0) delete cleanPileObj[sock];
    cleanPileObj[sock];
  }
  for (let sock of dirtyPile) {
    if (dirtyPileObj[sock]) {
      dirtyPileObj[sock]++;
    } else dirtyPileObj[sock] = 1;
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
