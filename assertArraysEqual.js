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
  } else {
    output = false;
  }
  return output;
};

const assertArraysEqual = function(firstArray, secondArray) {
  let actual = eqArrays(firstArray, secondArray);
  if (actual === true) {
    console.log(`🥳🎉🥳 Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`😢❌😢 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]); // equal
assertArraysEqual([1, 2, 3], [3, 2, 1]); // not equal

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // equal
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // not equal

assertArraysEqual([1, 2, 3], [1, 2, 3]); // equal
assertArraysEqual([1, 2, 3], [1, 5, 3]); // not equal

assertArraysEqual([1, 2, 3], [1, 2, 3]); // equal
assertArraysEqual([1, 2, 3], [1]); // not equal