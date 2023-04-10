const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  let actual = eqArrays(firstArray, secondArray);
  if (actual === true) {
    console.log(`🥳🎉🥳 Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`😢❌😢 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArraysEqual;