const assertEqual = require('./assertEqual');

const tail = function(arrayElements) {
  let tailArray = arrayElements.slice(1);
  return tailArray;
};

module.exports = tail;