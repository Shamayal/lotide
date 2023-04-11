const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(sourceArray, itemsToRemove) {
  let newArray = sourceArray;
  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  } return newArray;
};

// TEST CODE

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1, 3]),[2]); // => [2, 3]
assertArraysEqual(without(["hi", "hola", "salut"], [""]),["hi", "hola", "salut"]); // => ["hi", "hola", "salut"]
assertArraysEqual(without(["hi", "hola", "salut"], ["hey", "hola", "Salut"]), ["hi", "salut"]); // => ["hi", "salut"]

module.exports = without;