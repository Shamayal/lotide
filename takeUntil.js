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

const takeUntil = function(array, callback) {
  array.forEach((item, i) => {
    if (callback(item)) {
      array.splice(i);
    }
  });
  return array;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data3, x => x === 'been');
console.log(results3);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(results3, ['I\'ve']);