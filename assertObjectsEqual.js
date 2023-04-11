const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  let actual = eqObjects(object1, object2);
  const inspect = require('util').inspect;
  if (actual) {
    console.log(`🥳🎉🥳 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`😢❌😢 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" }); // equal
assertObjectsEqual({ size: "medium", color: "red" }, { size: "medium", color: "red", sleeveLength: "long" }); // not equal

assertObjectsEqual({ size: "medium", colors: ["red", "blue"] },{ colors: ["red", "blue"], size: "medium" }); // equal
assertObjectsEqual({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }); // not equal

assertObjectsEqual({ summer: ["ice-cream", "sorbet"], autumn: ["pumpkin pie", "apple pie"]}, { summer: ["ice-cream"], autumn: ["pumpkin pie", "apple pie"]}); // not equal

assertObjectsEqual({ flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["cream cheese", "strawberry"]}, { flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["creamcheese", "strawberry"]}); // not equal
assertObjectsEqual({ flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["cream cheese", "strawberry"]}, { flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["cream cheese", "strawberry"]}); // equal
assertObjectsEqual({ flavours: ["chocolate", "vanilla", "red velvet"], buttercream: ["cream cheese", "strawberry"]}, { flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["cream cheese", "strawberry"]}); // not equal

module.exports = assertObjectsEqual;