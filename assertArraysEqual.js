const eqArrays = function(firstArray, secondArray) {
  let output = true;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        output = output && true;
      } else {
        output = output && false;
      }
    }
  } return output;
};

const assertArraysEqual = function(actual) {
  if (actual === true) {
    console.log("equal");
  } else {
    console.log("not equal");
  }
};
// TEST CODE

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // equal
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // not equal

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // equal
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // not equal

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // equal
assertArraysEqual(eqArrays([1, 2, 3], [1, 5, 3])); // not equal
