const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const desserts = ["apple pie", "vanilla cupcakes", "cinnamon rolls", "chocolate croissants", "lemon tart"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(desserts, dessert => dessert[0]);
console.log(results1);

const results2 = desserts.map(dessert => dessert[0]);
console.log(results2);

const results3 = desserts.map(function(dessert) {
  return dessert[0];
});
console.log(results3);

const results4 = desserts.map(dessert => {
  return dessert[0];
});
console.log(results4);

const results5 = desserts.map.call(desserts, dessert => {
  return dessert[0];
});
console.log(results5);

assertArraysEqual(results1, ["a", "v", "c", "c", "l"]);
assertArraysEqual(results2, ["a", "v", "c", "c", "l"]);
assertArraysEqual(results3, ["a", "v", "c", "c", "l"]);
assertArraysEqual(results4, ["a", "v", "c", "c", "l"]);
assertArraysEqual(results5, ["a", "v", "c", "c", "l"]);

module.exports = map;