const assertEqual = require('./assertEqual');

const head = function(arrayElements) {
  let firstElement = arrayElements[0];
  return firstElement;
};

module.exports = head;