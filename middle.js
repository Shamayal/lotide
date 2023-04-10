const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(arrayElements) {
  let midElement = [];
  if (arrayElements.length >= 0 & arrayElements.length <= 2) {
    return midElement;
  } else if (arrayElements.length % 2 === 1) {
    return midElement = [arrayElements[Math.floor(arrayElements.length / 2)]];
  } else if (arrayElements.length % 2 === 0) {
    return midElement = [arrayElements[(arrayElements.length / 2) - 1], arrayElements[(arrayElements.length / 2)]];
  }
};

module.exports = middle;