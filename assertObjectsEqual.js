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

const eqObjects = function(object1, object2) {
  let array1 = [];
  let array2 = [];
  let result = true;
  for (let obj1 in object1) {
    array1.push(obj1);
  }
  for (let obj2 in object2) {
    array2.push(obj2);
  }
  if (array1.length === array2.length) {
    for (let key1 of array1) {
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
        if (eqArrays(object1[key1], object2[key1])) {
          result = result && true;
        } else {
          result = result && false;
        }
      } else if (object1[key1] === object2[key1]) {
        result = result && true;
      } else {
        result = result && false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

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
